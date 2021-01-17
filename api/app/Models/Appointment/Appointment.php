<?php

namespace App\Models\Appointment;

use App\Models\Employee;
use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;


    protected $table = 'appointments';

    protected $fillable
        = [
            'salon_id',
            'customer_id',
            'appointment_date',
            'start_time',
            'end_time',
            'status',
            'first_remind_time',
            'second_remind_time',
            'note',
        ];

    const STATUS
        = [
            1 => 'Requested',
            2 => 'Pending',
            3 => 'Confirm',
            4 => 'No show',
            5 => 'Done',
        ];


    public function services()
    {
        return $this->belongsToMany(Service::class, 'appointment_services', 'appointment_id', 'service_id');
    }

    public function technicians()
    {
        return $this->belongsToMany(Employee::class, 'appointment_technicians', 'appointment_id', 'technician_id');
    }

    public function delete()
    {
        self::deleting(function ($appointment) {
            $appointment->services()->detach();
            $appointment->technicians()->detach();
        });

        return parent::delete();
    }
}
