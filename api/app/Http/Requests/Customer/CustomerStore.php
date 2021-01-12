<?php

namespace App\Http\Requests\Customer;

use App\Http\Requests\ValidateResponse;
use App\Rules\ValidateEmailCustomerShopUnique;
use App\Rules\ValidatePhoneCustomerShopUnique;
use Illuminate\Foundation\Http\FormRequest;

class CustomerStore extends FormRequest
{
    use ValidateResponse;

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'required|max:255|string',
            'last_name' => 'required|max:255|string',
            'phone' => [
                'required',
                'max:255',
                new ValidatePhoneCustomerShopUnique()
            ],
            'email' => [
                'required',
                'max:255',
                'email',
                new ValidateEmailCustomerShopUnique()
            ],
            'birthday' => 'required',
            'reward_point' => 'integer|max:9999999|min:0',
            'fb_link' => 'required|url|max:255',
            'instagram_link' => 'required|url|max:255',
            'address' => 'required|max:255',
            'salon_id' => 'required|integer',
            'number_of_visit' => 'required|integer',
            'type_of_member' => 'required|integer|in:1,0',
            'is_active' => 'required|integer|in:1,0',
            'customer_group_ids' => 'integer',
            'total_expense' => 'required|numeric',
        ];
    }
}
