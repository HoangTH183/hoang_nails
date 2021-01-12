<?php

namespace App\Http\Requests\CompanyManager;

use App\Http\Requests\ValidateResponse;
use Illuminate\Foundation\Http\FormRequest;

class CompanyManagerStoreRequest extends FormRequest
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
            'name' => 'required|min:3',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'username' => 'required|min:4|unique:users',
            'phone' => 'required',
            'week_start_day' => 'required|integer|in:1,2,3,4,5,6,0',
            'is_active' => 'required|integer|in:1,0',
        ];
    }
}
