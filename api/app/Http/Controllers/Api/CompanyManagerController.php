<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyManager\CompanyManagerStoreRequest;
use App\Http\Requests\CompanyManager\CompanyManagerUpdateRequest;
use App\Repositories\User\UserEloquentRepository;
use App\Repositories\User\UserRepositoryInterface;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class CompanyManagerController extends Controller
{


    /***
     * @var UserRepositoryInterface | UserEloquentRepository
     */
    private $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function index(Request $request)
    {
        $listUsers = $this->userRepository->getByFilter($request->all());


        return response()->json([
            'message' => 'Get success',
            'data' => [
                'users' => $listUsers,
            ]
        ]);
    }

    public function store(CompanyManagerStoreRequest $request)
    {
        $user = $this->userRepository->create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'username' => $request->input('username'),
            'user_type' => 3,
            'address' => $request->input('address', ''),
            'phone' => $request->input('phone', ''),
            'facebook_link' => $request->input('facebook_link', ''),
            'instagram_link' => $request->input('instagram_link', ''),
            'week_start_day' => $request->input('week_start_day'),
            'is_active' => $request->input('is_active'),
        ]);

        return response()->json([
            'message' => 'Add success',
            'data' => [
                'user' => $user,
            ]
        ]);
    }

    public function show($id)
    {
        $user = $this->userRepository->find($id);

        if ($user) {
            return response()->json([
                'message' => 'get success',
                'data' => [
                    'user' => $user,
                ]
            ]);
        } else {
            return response()->json([
                'error' => 'get error',
            ], JsonResponse::HTTP_NOT_FOUND);
        }
    }


    public function update(CompanyManagerUpdateRequest $request, $id)
    {

        $updateData = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'username' => $request->input('username'),
            'user_type' => 3,
            'address' => $request->input('address', ''),
            'phone' => $request->input('phone', ''),
            'facebook_link' => $request->input('facebook_link', ''),
            'instagram_link' => $request->input('instagram_link', ''),
            'week_start_day' => $request->input('week_start_day'),
            'is_active' => $request->input('is_active'),
        ];

        if ($request->input('password')) {
            $updateData['password'] = bcrypt($request->input('password'));
        }
        $user = $this->userRepository->update($id, $updateData);

        return response()->json([
            'message' => 'Update success',
            'data' => [
                'user' => $user,
            ]
        ]);
    }


    public function destroy($id)
    {
        return response()->json([
            'error' => 'delete error',
        ], JsonResponse::HTTP_NOT_FOUND);
    }

}
