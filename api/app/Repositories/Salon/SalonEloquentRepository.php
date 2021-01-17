<?php

namespace App\Repositories\Salon;

use App\Models\Employee;
use App\Models\Salon;
use App\Repositories\EloquentRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SalonEloquentRepository extends EloquentRepository implements SalonRepositoryInterface
{

    /***
     * @var Employee
     */
    protected $employeeModel;

    /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return Salon::class;
    }

    public function setModel()
    {
        parent::setModel();
        $this->employeeModel = app()->make(Employee::class);
    }

    public function getByFilter(array $filter = [])
    {
        $query = $this->_model;

        if (isset($filter['owner_id'])) {
            $query = $query->where('owner_id', $filter['owner_id']);
        }

        if (isset($filter['name'])) {
            $query = $query->where('name', 'like', "%{$filter['name']}%");
        }

        return $query->paginate(10);
    }

    public function create(array $attributes)
    {
        return DB::transaction(function () use ($attributes) {
            /***
             * tạo mới salon
             */
            $salon = $this->_model->create([
                'name' => $attributes['name'],
                'address' => $attributes['address'],
                'phone' => $attributes['phone'],
                'email' => $attributes['email'],
                'fb_link' => $attributes['fb_link'],
                'instagram_link' => $attributes['instagram_link'],
                'opening_hour' => $attributes['opening_hour'],
                'closing_hour' => $attributes['closing_hour'],
                'week_start_day' => $attributes['week_start_day'],
                'owner_id' => Auth::id(),
                'is_active' => $attributes['is_active'],
            ]);

            $salon->employees()->create([
                'full_name' => $attributes['name'],
                'email' => $attributes['email'],
                'password' => bcrypt($attributes['password']),
                'username' => $attributes['username'],
                'role_id' => 1,
                'address' => $attributes['address'],
                'phone' => $attributes['phone'],
                'pass_code' => '',
                'avatar' => '',
            ]);

            return $salon;
        });


    }

    public function update($id, array $attributes)
    {
        /***
         * tạo mới salon
         */
        $salon = $this->_model->find($id);
        $salon->fill([
            'name' => $attributes['name'],
            'address' => $attributes['address'],
            'phone' => $attributes['phone'],
            'email' => $attributes['email'],
            'fb_link' => $attributes['fb_link'],
            'instagram_link' => $attributes['instagram_link'],
            'opening_hour' => $attributes['opening_hour'],
            'closing_hour' => $attributes['closing_hour'],
            'week_start_day' => $attributes['week_start_day'],
            'is_active' => $attributes['is_active'],
        ]);

        $salon->save();

        return $salon;
    }
}
