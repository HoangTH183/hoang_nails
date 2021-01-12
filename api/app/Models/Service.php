<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $table = 'services';


    protected $fillable
        = [
            'name',
            'price',
            'tax_percent',
            'estimate_time',
            'salon_id',
            'service_category_id',
            'is_active',
        ];
}
