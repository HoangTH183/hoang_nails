<?php

namespace App\Http\Controllers\Api\Company;

use App\Http\Controllers\Controller;
use App\Http\Requests\GroupCustomer\GroupCustomerStore;
use App\Http\Requests\GroupCustomer\GroupCustomerUpdate;
use App\Repositories\CustomerGroup\CustomerGroupEloquentRepository;
use App\Repositories\CustomerGroup\CustomerGroupRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CustomerGroupController extends Controller
{

    /***
     * @var CustomerGroupRepositoryInterface | CustomerGroupEloquentRepository
     */
    private $customerGroupRepository;

    public function __construct(CustomerGroupRepositoryInterface $customerGroupRepository)
    {
        $this->customerGroupRepository = $customerGroupRepository;
    }

    /***
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $filter = $request->all();
        $filter['salon_id'] = Auth::guard('company')->user()->salon_id;

        $customerGroups = $this->customerGroupRepository->getByFilter($filter);

        return response()->json([
            'message' => 'Get success',
            'data' => [
                'customerGroups' => $customerGroups,
            ]
        ]);
    }

    /***
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(GroupCustomerStore $request)
    {
        $data = $request->all();
        $data['salon_id'] = Auth::guard('company')->user()->salon_id;

        $customerGroup
            = $this->customerGroupRepository->create($data);

        return response()->json([
            'message' => 'Add success',
            'data' => [
                'customerGroup' => $customerGroup,
            ]
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $customerGroup = $this->customerGroupRepository->find($id);

        if (!$customerGroup) {
            throw  new NotFoundHttpException();
        }

        return response()->json([
            'message' => 'Get success',
            'data' => [
                'customerGroup' => $customerGroup,
            ]
        ]);
    }


    /***
     * @param GroupCustomerUpdate $request
     * @param                     $id
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(GroupCustomerUpdate $request, $id)
    {
        $data = $request->all();
        $data['salon_id'] = Auth::guard('company')->user()->salon_id;

        $customerGroup = $this->customerGroupRepository->update($id, $data);

        return response()->json([
            'message' => 'Update success',
            'data' => [
                'customerGroup' => $customerGroup,
            ]
        ]);
    }

    public function destroy($id)
    {
        $this->customerGroupRepository->delete($id);

        return response()->json([
            'message' => 'Delete success',
            'data' => [
            ]
        ]);

    }
}
