<?php

namespace App\Http\Requests\Ticket;

use App\Http\Requests\ValidateResponse;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class CreateFirst extends FormRequest
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
            'amount' => 'required',
            'tip_amount' => 'required',
            'ticket_discount' => 'required',
            'payments_status' => 'required',
            'total' => 'required',
            'is_refunded' => 'required',
            'is_voided' => 'required',
            'note' => 'string|max:255|nullable',
        ];
    }
}
