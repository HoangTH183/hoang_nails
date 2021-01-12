<?php

namespace App\Repositories\Customer;

use App\Models\Customer;
use App\Repositories\EloquentRepository;

class CustomerEloquentRepository extends EloquentRepository implements CustomerRepositoryInterface
{

    /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return Customer::class;
    }

    public function setModel()
    {
        parent::setModel();
    }

    public function getByFilter(array $filter = [], $orders = [])
    {
        $query = $this->_model;

        if (isset($filter['first_name'])) {
            $query = $query->where('first_name', 'like', "%{$filter['first_name']}%");
        }

        if (isset($filter['last_name'])) {
            $query = $query->where('last_name', 'like', "%{$filter['last_name']}%");
        }

        if (isset($filter['customer_group_ids'])) {
            $query = $query->whereHas('groups', function ($q) use ($filter) {
                if (is_array($filter['customer_group_ids'])) {
                    $q->whereIn('id', $filter['customer_group_ids']);
                } else {
                    $q->where('id', $filter['customer_group_ids']);
                }
            });
        }

        if (isset($filter['salon_id'])) {
            $query = $query->where('salon_id', $filter['salon_id']);
        }


        foreach ($orders as $key => $oder) {
            $query = $query->orderBy($key, $oder);
        }

        $query = $query->orderBy('id', 'desc');

        return $query->paginate(10);
    }

    public function create(array $attributes)
    {
        $item = parent::create($attributes);


        $item->groups()->sync($attributes['customer_group_ids']);

        return $item;
    }

    public function update($id, array $attributes)
    {
        $item = parent::update($id, $attributes);
        $item->groups()->sync($attributes['customer_group_ids']);

        return $item;
    }
}
