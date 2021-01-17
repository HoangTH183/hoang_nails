<?php

namespace App\Http\Requests\Appointment;

use App\Http\Requests\ValidateResponse;
use Illuminate\Foundation\Http\FormRequest;

class Update extends FormRequest
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
            'customer_id' => 'required|integer',
            'appointment_date' => 'required|string|date_format:Y-m-d',
            'start_time' => 'required|string|date_format:h:i',
            'end_time' => 'required|string|date_format:h:i',
            'status' => 'required|integer|in:1,2,3,4,5',
            'first_remind_time' => 'required|integer',
            'second_remind_time' => 'required|integer',
            'services' => 'integer',
            'technician' => 'integer',
        ];
    }
}
