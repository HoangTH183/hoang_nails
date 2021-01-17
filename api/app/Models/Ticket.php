<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $table = 'tickets';


    protected $fillable
        = [
            'ticket_code',
            'salon_id',
            'customer_id',
            'create_id',
            'amount',
            'tip_amount',
            'ticket_discount',
            'payments_status',
            'total',
            'is_refunded',
            'is_voided',
            'note',
            'is_cancel',
        ];

    public function services()
    {
        return $this->hasMany(TicketService::class, 'ticket_id');
    }

    public function products()
    {
        return $this->hasMany(TicketProduct::class, 'ticket_id');
    }
}
