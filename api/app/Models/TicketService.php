<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TicketService extends Model
{
    use HasFactory;

    protected $table = 'ticket_services';


    protected $fillable
        = [
            'ticket_id',
            'service_id',
            'technician_id',
            'discount',
            'price',
            'discount_technician_id',
        ];
}
