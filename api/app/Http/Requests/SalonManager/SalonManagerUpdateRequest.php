<?php

namespace App\Http\Requests\SalonManager;

use App\Http\Requests\ValidateResponse;
use Illuminate\Foundation\Http\FormRequest;

class SalonManagerUpdateRequest extends FormRequest
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
            'name' => 'required|min:3|string',
            'address' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email',
            'fb_link' => 'required|url',
            'instagram_link' => 'required|url',
            'opening_hour' => 'required|date_format:H:i:s',
            'closing_hour' => 'required|date_format:H:i:s',
            'week_start_day' => 'required|integer|in:0,1,2,3,4,5,6',
            'is_active' => 'required|integer|in:0,1',
        ];
    }
}
