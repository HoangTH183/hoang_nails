<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;


    protected $table = 'customers';

    protected $fillable
        = [
            'first_name',
            'last_name',
            'phone',
            'email',
            'birthday',
            'reward_point',
            'fb_link',
            'instagram_link',
            'address',
            'salon_id',
            'number_of_visit',
            'type_of_member',
            'customer_group_id',
            'total_expense',
            'is_active',
        ];

    public function groups()
    {
        return $this->belongsToMany(CustomerGroup::class, 'groups_customers', 'customer_id', 'customer_group_id');
    }

    public function delete()
    {
        self::deleting(function ($item) {
            $item->groups()->detach();
        });

        return parent::delete();
    }
}
