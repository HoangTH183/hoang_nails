<?php

namespace App\Providers;

use App\Repositories\Appointment\AppointmentEloquentRepository;
use App\Repositories\Appointment\AppointmentRepositoryInterface;
use App\Repositories\Customer\CustomerEloquentRepository;
use App\Repositories\Customer\CustomerRepositoryInterface;
use App\Repositories\CustomerGroup\CustomerGroupEloquentRepository;
use App\Repositories\CustomerGroup\CustomerGroupRepositoryInterface;
use App\Repositories\Employee\EmployeeEloquentRepository;
use App\Repositories\Employee\EmployeeRepositoryInterface;
use App\Repositories\Product\ProductEloquentRepository;
use App\Repositories\Product\ProductRepositoryInterface;
use App\Repositories\ProductCategory\ProductCategoryEloquentRepository;
use App\Repositories\ProductCategory\ProductCategoryRepositoryInterface;
use App\Repositories\Salon\SalonEloquentRepository;
use App\Repositories\Salon\SalonRepositoryInterface;
use App\Repositories\Service\ServiceEloquentRepository;
use App\Repositories\Service\ServiceRepositoryInterface;
use App\Repositories\ServiceCategory\ServiceCategoryEloquentRepository;
use App\Repositories\ServiceCategory\ServiceCategoryRepositoryInterface;
use App\Repositories\Ticket\TicketEloquentRepository;
use App\Repositories\Ticket\TicketRepositoryInterface;
use App\Repositories\User\UserEloquentRepository;
use App\Repositories\User\UserRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->singletonRepository();
    }

    private function singletonRepository()
    {
        /**
         * for user
         */
        $this->app->singleton(
            UserRepositoryInterface::class,
            UserEloquentRepository::class
        );
        $this->app->singleton(
            SalonRepositoryInterface::class,
            SalonEloquentRepository::class
        );

        $this->app->singleton(
            EmployeeRepositoryInterface::class,
            EmployeeEloquentRepository::class
        );

        $this->app->singleton(
            CustomerGroupRepositoryInterface::class,
            CustomerGroupEloquentRepository::class
        );

        $this->app->singleton(
            CustomerRepositoryInterface::class,
            CustomerEloquentRepository::class
        );

        $this->app->singleton(
            ServiceCategoryRepositoryInterface::class,
            ServiceCategoryEloquentRepository::class
        );

        $this->app->singleton(
            ServiceRepositoryInterface::class,
            ServiceEloquentRepository::class
        );

        $this->app->singleton(
            ProductCategoryRepositoryInterface::class,
            ProductCategoryEloquentRepository::class
        );

        $this->app->singleton(
            ProductRepositoryInterface::class,
            ProductEloquentRepository::class
        );

        $this->app->singleton(
            TicketRepositoryInterface::class,
            TicketEloquentRepository::class
        );

        $this->app->singleton(
            AppointmentRepositoryInterface::class,
            AppointmentEloquentRepository::class
        );


    }
}
