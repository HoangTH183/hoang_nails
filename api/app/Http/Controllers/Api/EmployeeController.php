<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Employee\EmployeeStoreRequest;
use App\Http\Requests\Employee\EmployeeUpdateRequest;
use App\Repositories\Employee\EmployeeEloquentRepository;
use App\Repositories\Employee\EmployeeRepositoryInterface;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class EmployeeController extends Controller
{
    /**
     * @var EmployeeRepositoryInterface | EmployeeEloquentRepository
     */
    private $employeeRepository;

    public function __construct(EmployeeRepositoryInterface $employeeRepository)
    {
        $this->employeeRepository = $employeeRepository;
    }

    public function index(Request $request)
    {

        $filter = $request->all();

        $listEmployees = $this->employeeRepository->getByFilter($filter);


        return response()->json([
            'message' => 'Get success',
            'data' => [
                'employees' => $listEmployees,
            ]
        ]);
    }

    public function store(EmployeeStoreRequest $request)
    {
        $employee = $this->employeeRepository->create([
            'full_name' => $request->input('full_name'),
            'email' => $request->input('email'),
            'password' => $request->input('password'),
            'username' => $request->input('username'),
            'role_id' => $request->input('role_id'),
            'salon_id' => $request->input('salon_id'),
            'address' => $request->input('address', ''),
            'phone' => $request->input('phone', ''),
            'pass_code' => $request->input('pass_code'),
            'avatar' => $request->input('avatar', ''),
            'commission_percent' => $request->input('commission_percent', 0),
            'commission_cash_percent' => $request->input('commission_cash_percent', 0),
            'commission_check_percent' => $request->input('commission_check_percent', 0),
        ]);

        return response()->json([
            'message' => 'Add success',
            'data' => [
                'employee' => $employee,
            ]
        ]);

    }

    public function show($id)
    {
        $employee = $this->employeeRepository->find($id);

        if (!$employee) {
            return response()->json([
                'error' => 'get error',
            ], JsonResponse::HTTP_NOT_FOUND);
        }

        return response()->json([
            'message' => 'Get success',
            'data' => [
                'employee' => $employee,
            ]
        ]);

    }

    public function update(EmployeeUpdateRequest $request, $id)
    {

        $updateData = [
            'full_name' => $request->input('full_name'),
            'email' => $request->input('email'),

            'username' => $request->input('username'),
            'role_id' => $request->input('role_id'),
            'salon_id' => $request->input('salon_id'),
            'address' => $request->input('address'),
            'phone' => $request->input('phone'),
            'pass_code' => $request->input('pass_code'),
            'avatar' => $request->input('avatar'),
            'commission_percent' => $request->input('commission_percent', 0),
            'commission_cash_percent' => $request->input('commission_cash_percent', 0),
            'commission_check_percent' => $request->input('commission_check_percent', 0),
        ];

        if ($request->input('password', false)) {
            $updateData['password'] = bcrypt($request->input('password'));
        }
        $employee = $this->employeeRepository->update($id, $updateData);

        return response()->json([
            'message' => 'Update success',
            'data' => [
                'employee' => $employee,
            ]
        ]);


    }
}
