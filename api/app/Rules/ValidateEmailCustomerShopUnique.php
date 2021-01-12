<?php

namespace App\Rules;

use App\Models\Customer;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Auth;

class ValidateEmailCustomerShopUnique implements Rule
{
    private $ignoreId;

    /***
     * ValidateEmailCustomerShopUnique constructor.
     *
     * @param int $ignoreId
     */
    public function __construct($ignoreId = 0)
    {
        $this->ignoreId = $ignoreId;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param string $attribute
     * @param mixed  $value
     *
     * @return bool
     */
    public function passes($attribute, $value)
    {

        $existEmail = Customer::where('email', $value)
            ->where('salon_id', Auth::guard()->user()->salon_id)
            ->where('id', '<>', $this->ignoreId)
            ->first();

        return !$existEmail;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The email customer has taken.';
    }
}
