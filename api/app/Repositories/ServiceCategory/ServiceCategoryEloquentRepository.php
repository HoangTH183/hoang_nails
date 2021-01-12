<?php

namespace App\Repositories\ServiceCategory;

use App\Models\ServiceCategory;
use App\Repositories\EloquentRepository;

class ServiceCategoryEloquentRepository extends EloquentRepository implements ServiceCategoryRepositoryInterface
{

    /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return ServiceCategory::class;
    }

    public function setModel()
    {
        parent::setModel();
    }

    public function getByFilter(array $filter = [])
    {
        $query = $this->_model;

        if (isset($filter['salon_id'])) {
            $query = $query->where('salon_id', $filter['salon_id']);
        }

        $query = $query->orderBy('id', 'desc');

        return $query->paginate(10);
    }
}
