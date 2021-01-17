<?php

namespace App\Repositories\Ticket;

use App\Models\Ticket;
use App\Models\TicketProduct;
use App\Models\TicketService;
use App\Repositories\EloquentRepository;
use Carbon\Carbon;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Exception\JsonException;
use Symfony\Component\HttpFoundation\JsonResponse;

class TicketEloquentRepository implements TicketRepositoryInterface
{

    /**
     * @var Ticket
     */
    private $ticketModel;

    /***
     * @var TicketProduct
     */
    private $ticketProductModel;

    /***
     * @var TicketService
     */
    private $ticketServiceModel;

    /***
     * TicketEloquentRepository constructor.
     */

    public function __construct()
    {
        $this->setModel();
    }

    private function setModel()
    {

        $this->ticketModel = app()->make(Ticket::class);
        $this->ticketProductModel = app()->make(TicketProduct::class);
        $this->ticketServiceModel = app()->make(TicketService::class);
    }

    public function getWithFilter(array $filter, $orders)
    {
        $query = $this->ticketModel;

        if (isset($filter['salon_id'])) {
            $query = $query->where('salon_id', $filter['salon_id']);
        }


        foreach ($orders as $key => $oder) {
            $query = $query->orderBy($key, $oder);
        }

        $query = $query->orderBy('id', 'desc');

        return $query->paginate(10);
    }

    public function store($ticketInfo, $listService = [], $listProducts = [])
    {

        $newTicket = $this->ticketModel->create([
            'ticket_code' => '',
            'salon_id' => $ticketInfo['salon_id'],
            'customer_id' => $ticketInfo['customer_id'],
            'create_id' => Auth::id(),
            'amount' => $ticketInfo['amount'],
            'tip_amount' => $ticketInfo['tip_amount'],
            'ticket_discount' => $ticketInfo['ticket_discount'],
            'payments_status' => $ticketInfo['payments_status'],
            'total' => $ticketInfo['total'],
            'is_refunded' => 0,
            'is_voided' => $ticketInfo['is_voided'],
            'note' => $ticketInfo['note'],
            'is_cancel' => 0,
        ]);

        $newTicket->ticket_code = Carbon::now()->format('Ymd').'T'.$newTicket->id;
        $newTicket->save();

        $newTicket->services;
        $newTicket->products;

        return $newTicket;
    }

    public function update($id, $ticketInfo, $listService = [], $listProducts = [])
    {

        $newTicket = DB::transaction(function () use ($id, $ticketInfo, $listService, $listProducts) {
            $newTicket = $this->ticketModel->find($id);

            $sumPrice = 0;
            $sumDiscount = 0;


            foreach ($listService as $eachService) {
                /***
                 * Cộng tổng tiền, tổng giảm giá các phần service
                 */
                $sumPrice += (float)$eachService['price'];
                $sumDiscount += (float)$eachService['discount'];

                if ($eachService['id'] == 0) {
                    $this->ticketServiceModel->create([
                        "ticket_id" => $newTicket->id,
                        "service_id" => $eachService['service_id'],
                        "technician_id" => $eachService['technician_id'],
                        "discount" => $eachService['discount'],
                        "price" => $eachService['price'],
                        "discount_technician_id" => $eachService['discount_technician_id'],
                    ]);
                } else {
                    $existTicketService = $this->ticketServiceModel->find($id);

                    $existTicketService->fill([
                        "ticket_id" => $newTicket->id,
                        "service_id" => $eachService['service_id'],
                        "technician_id" => $eachService['technician_id'],
                        "discount" => $eachService['discount'],
                        "price" => $eachService['price'],
                        "discount_technician_id" => $eachService['discount_technician_id'],
                    ]);
                    $existTicketService->save();
                }
            }


            foreach ($listProducts as $eachProduct) {
                /***
                 * cộng tổng tiền, Tổng giảm giá các phần sản phẩm
                 */
                $priceProduct = $eachProduct['price'];
                $sumPrice += (double)$priceProduct;
                $sumDiscount += (float)$eachProduct['discount'];

                if ($eachProduct['id'] == 0) {
                    $this->ticketProductModel->create([
                        "ticket_id" => $newTicket->id,
                        "product_id" => $eachProduct['product_id'],
                        "discount" => $eachProduct['discount'],
                        "price" => $eachProduct['price'],
                    ]);
                } else {
                    $existTicketService = $this->ticketProductModel->find($id);

                    $existTicketService->fill([
                        "ticket_id" => $newTicket->id,
                        "product_id" => $eachProduct['product_id'],
                        "discount" => $eachProduct['discount'],
                        "price" => $eachProduct['price'],
                    ]);
                    $existTicketService->save();
                }
            }


            if (
                /***
                 * so sánh tổng hóa đơn chưa kèm khuyến mãi
                 */
                ($ticketInfo['amount'] != $sumPrice)
                /***
                 * So sánh tổng hóa đơn sau kèm khuyến mãi
                 */
                || ($ticketInfo['total'] != $sumPrice - $sumDiscount - $ticketInfo['ticket_discount'])
            ) {

                DB::rollBack();

                throw new HttpResponseException(
                    response()->json([
                        'error' => 'Ticket info not correct',
                    ], JsonResponse::HTTP_EXPECTATION_FAILED)
                );

            }


            $newTicket->fill([
                'salon_id' => $ticketInfo['salon_id'],
                'customer_id' => $ticketInfo['customer_id'],
                'create_id' => Auth::id(),
                'amount' => $ticketInfo['amount'],
                'tip_amount' => $ticketInfo['tip_amount'],
                'ticket_discount' => $ticketInfo['ticket_discount'],
                'payments_status' => $ticketInfo['payments_status'],
                'total' => $ticketInfo['total'],
                'is_refunded' => $ticketInfo['is_refunded'],
                'is_voided' => $ticketInfo['is_voided'],
                'note' => $ticketInfo['note'],
                'is_cancel' => 0,
            ]);

            $newTicket->save();

            return $newTicket;
        });


        $newTicket->services;
        $newTicket->products;

        return $newTicket;
    }

    public function show($id)
    {

        $newTicket = $this->ticketModel->find($id);


        $newTicket->services;
        $newTicket->products;

        return $newTicket;
    }


}
