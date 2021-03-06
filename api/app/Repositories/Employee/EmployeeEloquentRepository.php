<?php

namespace App\Repositories\Employee;

use App\Models\Employee;
use App\Repositories\EloquentRepository;

class EmployeeEloquentRepository extends EloquentRepository implements EmployeeRepositoryInterface
{


    /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return Employee::class;
    }

    public function setModel()
    {
        parent::setModel(); // TODO: Change the autogenerated stub
    }

    public function getByFilter(array $filter = [])
    {
        $query = $this->_model;

        if (isset($filter['username'])) {
            $query = $query->where('username', 'like', "%{$filter['username']}%");
        }
        if (isset($filter['salon_id'])) {
            $query = $query->where('salon_id', "%{$filter['salon_id']}%");
        }

        return $query->paginate(10);
    }

    public function create(array $attributes)
    {

        $attributes['password'] = bcrypt($attributes['password']);

        return parent::create($attributes);
    }
}
