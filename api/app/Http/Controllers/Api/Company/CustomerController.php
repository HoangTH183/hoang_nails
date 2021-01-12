<?php

namespace App\Http\Controllers\Api\Company;

use App\Http\Controllers\Controller;
use App\Http\Requests\Customer\CustomerStore;
use App\Models\Customer;
use App\Repositories\Customer\CustomerEloquentRepository;
use App\Repositories\Customer\CustomerRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CustomerController extends Controller
{

    /***
     * @var CustomerRepositoryInterface | CustomerEloquentRepository
     */
    private $customerRepository;

    public function __construct(CustomerRepositoryInterface $customerRepository)
    {
        $this->customerRepository = $customerRepository;
    }


    public function index(Request $request)
    {

        $filter = $request->all();

        $filter['salon_id'] = Auth::guard('company')->user()->salon_id;

        $order = [];

        if ($request->input('order_by')) {
            $order[$request->get('order_by')] = $request->get('order_type', 'desc');
        }

        $customers = $this->customerRepository->getByFilter($filter, $order);

        return response()->json([
            'message' => 'Get success',
            'data' => [
                'customers' => $customers,
            ]
        ]);
    }

    /***
     * @param CustomerStore $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CustomerStore $request)
    {
        $data = $request->all();


        $data['salon_id'] = Auth::guard('company')->user()->salon_id;

        $customer = $this->customerRepository->create($data);


        return response()->json([
            'message' => 'Add success',
            'data' => [
                'customer' => $customer,
            ]
        ]);
    }

    /***
     * @param $id
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $customer = $this->customerRepository->find($id);

        if (!$customer) {
            throw new NotFoundHttpException();
        }

        if ($customer->salon_id != Auth::guard('company')->user()->salon_id) {
            throw new NotFoundHttpException();
        }


        return response()->json([
            'message' => 'Get success',
            'data' => [
                'customer' => $customer,
            ]
        ]);
    }

    /**
     * @param Request $request
     * @param         $id
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();


        $data['salon_id'] = Auth::guard('company')->user()->salon_id;

        $customer = $this->customerRepository->update($id, $data);


        return response()->json([
            'message' => 'Update success',
            'data' => [
                'customer' => $customer,
            ]
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $customer = $this->customerRepository->find($id);

        if (!$customer) {
            throw new NotFoundHttpException();
        } else {
            $customer->delete();

            return response()->json([
                'message' => 'Delete success',
                'data' => [
                ]
            ]);
        }
    }
}
