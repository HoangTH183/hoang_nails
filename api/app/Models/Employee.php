<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Employee extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable
        = [
            'full_name',
            'email',
            'password',
            'username',
            'role_id',
            'salon_id',
            'address',
            'phone',
            'pass_code',
            'avatar',
            'commission_percent',
            'commission_cash_percent',
            'commission_check_percent',

        ];

    const Roles
        = [
            9 => 'Super salon manager',
            1 => 'Salon manager',
            2 => 'Receptionist',
            3 => 'Technical',
            4 => 'For booking',
        ];

    protected $appends
        = [
            'role_name',
        ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden
        = [
            'password',
            'remember_token',
        ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts
        = [
            'email_verified_at' => 'datetime',
        ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    /***
     * relation
     */


    public function salon()
    {
        return $this->belongsTo(Salon::class, 'salon_id');
    }

    public function getRoleNameAttribute($value)
    {
        try {
            return self::Roles[$this->role_id];
        } catch (\Exception $exception) {
            return 'undefined';
        }

    }
}
