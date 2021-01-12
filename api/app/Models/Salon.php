<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Salon extends Model
{
    use HasFactory;

    protected $table = 'salons';


    protected $fillable
        = [
            'name',
            'address',
            'phone',
            'email',
            'fb_link',
            'instagram_link',
            'opening_hour',
            'closing_hour',
            'week_start_day',
            'is_active',
            'owner_id',
        ];


    public function employees()
    {
        return $this->hasMany(Employee::class, 'salon_id');
    }
}
