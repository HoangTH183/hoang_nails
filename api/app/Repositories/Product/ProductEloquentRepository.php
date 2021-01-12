<?php

namespace App\Repositories\Product;

use App\Models\Product;
use App\Repositories\EloquentRepository;

class ProductEloquentRepository extends EloquentRepository implements ProductRepositoryInterface
{

    /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return Product::class;
    }

    public function setModel()
    {
        parent::setModel();
    }

    public function getByFilter(array $filter = [], array $orders = [])
    {
        $query = $this->_model;

        if (isset($filter['name'])) {
            $query = $query->where('name', 'like', "%{$filter['name']}%");
        }

        if (isset($filter['salon_id'])) {
            $query = $query->where('salon_id', $filter['salon_id']);
        }

        if (isset($filter['product_category_id'])) {
            $query = $query->where('product_category_id', $filter['product_category_id']);
        }

        if (isset($filter['is_active'])) {
            $query = $query->where('is_active', $filter['is_active']);
        }

        foreach ($orders as $key => $oder) {
            $query = $query->orderBy($key, $oder);
        }

        $query = $query->orderBy('id', 'desc');

        return $query->paginate(10);
    }
}
