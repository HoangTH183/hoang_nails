<?php

namespace App\Http\Requests\Employee;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class EmployeeUpdateRequest extends FormRequest
{
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
            'full_name' => 'required|min:3|string',
            'address' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email',
            'role_id' => 'required|integer',
            'salon_id' => 'required|integer',
            'is_active' => 'required|integer|in:0,1',
            'pass_code' => 'required|unique:employees,pass_code,'.$this->employee,

            'password' => 'nullable|string|min:6',
            'username' => 'required|string|min:4|unique:employees,username,'.$this->employee,
        ];
    }
}
