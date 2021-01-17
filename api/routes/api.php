<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
/***
 * dành cho admin
 */
Route::group(['prefix' => 'admin'], function () {
    Route::post('login', [\App\Http\Controllers\Api\AuthController::class, 'login']);
    Route::post('logout', [\App\Http\Controllers\Api\AuthController::class, 'logout']);
    Route::post('refresh', [\App\Http\Controllers\Api\AuthController::class, 'refresh']);
    Route::post('me', [\App\Http\Controllers\Api\AuthController::class, 'me']);
});

/***
 *
 * dành cho người dùng đăng nhập
 */
Route::group(['prefix' => '/'], function () {
    Route::post('login', [\App\Http\Controllers\Api\AuthCompanyController::class, 'login']);
    Route::post('logout', [\App\Http\Controllers\Api\AuthCompanyController::class, 'logout']);
    Route::post('refresh', [\App\Http\Controllers\Api\AuthCompanyController::class, 'refresh']);
    Route::post('me', [\App\Http\Controllers\Api\AuthCompanyController::class, 'me']);

    Route::group(['middleware' => 'auth:company'], function () {
        Route::apiResource('customer-groups', \App\Http\Controllers\Api\Company\CustomerGroupController::class);
        Route::apiResource('customers', \App\Http\Controllers\Api\Company\CustomerController::class);
        Route::apiResource('service-categories', \App\Http\Controllers\Api\Company\ServiceCategoryController::class);
        Route::apiResource('services', \App\Http\Controllers\Api\Company\ServiceController::class);
        Route::apiResource('product-categories', \App\Http\Controllers\Api\Company\ProductCategoryController::class);
        Route::apiResource('products', \App\Http\Controllers\Api\Company\ProductController::class);
        Route::apiResource('tickets', \App\Http\Controllers\Api\Company\TicketController::class);
        Route::apiResource('appointments', \App\Http\Controllers\Api\Company\AppointmentController::class);
    });

});


/***
 * Trang quản trị cho admin\owner
 */

Route::group(['middleware' => 'auth:api', 'prefix' => 'admin'], function () {
    Route::apiResource('owners', \App\Http\Controllers\Api\CompanyManagerController::class);
    Route::apiResource('salons', \App\Http\Controllers\Api\SalonManagerController::class);
    Route::apiResource('employees', \App\Http\Controllers\Api\EmployeeController::class);
});


Route::group(['middleware' => 'auth:company', 'prefix' => 'salon'], function () {

});
