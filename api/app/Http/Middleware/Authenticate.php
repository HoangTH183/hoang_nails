<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Exceptions\HttpResponseException;
use Symfony\Component\HttpFoundation\JsonResponse;

class Authenticate extends Middleware
{

    /***
     * @param \Illuminate\Http\Request $request
     *
     * @return string|null
     * @throws AuthenticationException
     */
    protected function redirectTo($request)
    {

        if (!$request->expectsJson()) {
            return route('login');
        }
    }

    protected function unauthenticated($request, array $guards)
    {
        throw new HttpResponseException(
            response()->json([
                'code' => 401,
                'message' => 'Token expire',
                'data' => null
            ], JsonResponse::HTTP_UNAUTHORIZED)
        );
    }
}
