<?php

namespace App\Repositories\Appointment;

use App\Models\Appointment\Appointment;
use App\Repositories\EloquentRepository;
use Carbon\Carbon;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class AppointmentEloquentRepository extends EloquentRepository implements AppointmentRepositoryInterface
{

    /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return Appointment::class;
    }

    public function setModel()
    {
        parent::setModel();
    }

    public function getByFilter(array $filter = [], $orders = [])
    {
        $query = $this->_model;


        $query = $query->with([
            'services',
            'technicians'
        ]);


        if (isset($filter['salon_id'])) {
            $query = $query->where('salon_id', $filter['salon_id']);
        }

        if (isset($filter['customer_id'])) {
            $query = $query->where('customer_id', $filter['customer_id']);
        }

        if (isset($filter['technician_id'])) {
            $query = $query->whereHas('technicians', function ($query) use ($filter) {
                return $query->where('technician_id', $filter['technician_id']);
            });
        }

        if (isset($filter['start_date'])) {
            $query = $query->where('appointment_date',
                '>=',
                Carbon::createFromFormat('Y-m-d', $filter['start_date'])->format('y-m-d')
            );
        }

        if (isset($filter['end_date'])) {
            $query = $query->where(
                'appointment_date',
                '<=',
                Carbon::createFromFormat('Y-m-d', $filter['end_date'])->format('y-m-d')
            );
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

        $item->services()->sync($attributes['services']);
        $item->technicians()->sync($attributes['technicians']);

        $item->services;
        $item->technicians;


        return $item;
    }

    public function find($id)
    {
        $item = $this->_model->find($id);

        if (!$item) {
            throw new NotFoundHttpException();
        }


        $item->services;
        $item->technicians;


        return $item;

    }

    public function update($id, array $attributes)
    {
        $item = parent::update($id, $attributes);

        $item->services()->sync($attributes['services']);
        $item->technicians()->sync($attributes['technicians']);

        $item->services;
        $item->technicians;


        return $item;
    }

}
