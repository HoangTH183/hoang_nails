<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PHPUnit\TextUI\XmlConfiguration\Group;

class CustomerGroup extends Model
{
    use HasFactory;


    protected $table = 'customer_groups';

    protected $fillable
        = [
            'name',
            'salon_id',
            'is_active',
        ];

    public function customers()
    {
        return $this->belongsToMany(Group::class, 'groups_customers', 'customer_group_id', 'customer_id');
    }

    public function delete()
    {

        self::deleting(function ($item) {
            $item->customers()->detach();
        });

        return parent::delete();
    }


}
