<?php

namespace App\Repositories\CustomerGroup;

use App\Models\CustomerGroup;
use App\Repositories\EloquentRepository;

class CustomerGroupEloquentRepository extends EloquentRepository implements CustomerGroupRepositoryInterface
{

    /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return CustomerGroup::class;
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
