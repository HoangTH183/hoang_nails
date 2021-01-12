<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\Login;
use Illuminate\Http\Request;

class AuthCompanyController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:company', ['except' => ['login']]);
    }

    /**
     * @param Login $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Login $request)
    {
        $credentials = $request->all(['username', 'password']);

        if (!$token = auth()->guard('company')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $user = auth()->guard('company')->user();
        $user->salon;


        return $this->respondWithToken($token, $user);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        $user = auth()->guard('company')->user();
        $user->salon;

        return response()->json([
            'message' => 'Get success',
            'data' => [
                'user' => $user,
            ]
        ], 200);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->guard('company')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->guard('company')->refresh(), auth()->guard('company')->user());
    }

    /**
     * @param $token
     * @param $user
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token, $user)
    {
        return response()->json([
            'message' => 'login success',
            'data' => [
                'access_token' => $token,
                'token_type' => 'bearer',
                'expires_in' => auth()->guard('company')->factory()->getTTL() * 60,
                'user_info' => $user,
            ],
        ]);
    }
}
