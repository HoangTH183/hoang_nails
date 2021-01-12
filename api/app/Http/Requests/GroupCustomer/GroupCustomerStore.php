<?php

namespace App\Http\Requests\GroupCustomer;

use App\Http\Requests\ValidateResponse;
use Illuminate\Foundation\Http\FormRequest;

class GroupCustomerStore extends FormRequest
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
            'name' => 'required',
            'is_active' => 'required|integer|in:1,0',
        ];
    }
}
