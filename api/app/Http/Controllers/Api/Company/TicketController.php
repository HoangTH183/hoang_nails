<?php

namespace App\Http\Controllers\Api\Company;

use App\Http\Controllers\Controller;
use App\Http\Requests\Ticket\CreateFirst;
use App\Http\Requests\Ticket\Update;
use App\Repositories\Ticket\TicketEloquentRepository;
use App\Repositories\Ticket\TicketRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TicketController extends Controller
{
    /**
     * @var $ticketRepository TicketEloquentRepository | TicketRepositoryInterface
     */
    private $ticketRepository;

    public function __construct(TicketRepositoryInterface $ticketRepository)
    {
        $this->ticketRepository = $ticketRepository;
    }

    public function index(Request $request)
    {
        $filter = $request->all();
        $order = [];

        if ($request->input('order_by')) {
            $order[$request->get('order_by')] = $request->get('order_type', 'desc');
        }

        $filter['salon_id'] = Auth::guard('company')->user()->salon_id;


        $item = $this->ticketRepository->getWithFilter($filter, $order);

        return response()->json([
            'message' => 'Get success',
            'data' => [
                'tickets' => $item
            ]
        ]);

    }

    public function store(CreateFirst $request)
    {
        $data = $request->all();

        $data['salon_id'] = Auth::guard('company')->user()->salon_id;

        $ticket = $this->ticketRepository->store($data);

        return response()->json([
            'message' => 'Create success',
            'data' => [
                'ticket' => $ticket
            ]
        ]);
    }


    public function update($id, Update $request)
    {
        $data = $request->all();


        $data['salon_id'] = Auth::guard('company')->user()->salon_id;

        $ticket = $this->ticketRepository->update(
            $id,
            $data,
            $request->input('services', []),
            $request->input('products', []));

        return response()->json([
            'message' => 'Update success',
            'data' => [
                'ticket' => $ticket
            ]
        ]);
    }

    public function show($id)
    {
        $item = $this->ticketRepository->show($id);

        return response()->json([
            'message' => 'Update success',
            'data' => [
                'ticket' => $item
            ]
        ]);

    }

    public function destroy($id)
    {

    }

}
