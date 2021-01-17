<?php

namespace App\Http\Requests\Ticket;

use App\Http\Requests\ValidateResponse;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

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
            'amount' => 'required',
            'tip_amount' => 'required',
            'ticket_discount' => 'required',
            'payments_status' => 'required',
            'total' => 'required',
            'is_refunded' => 'required',
            'is_voided' => 'required',
            'note' => 'string|max:255|nullable',
            'services.*.id' => 'required',
            'services.*.service_id' => 'required|integer',
            'services.*.technician_id' => 'required|integer',
            'services.*.discount' => 'required|integer',
            'services.*.price' => 'required|integer',
            'services.*.discount_technician_id' => 'required|integer',
            'products.*.id' => 'required',
            'products.*.product_id' => 'required',
            'products.*.discount' => 'required',
            'products.*.price' => 'required',
        ];
    }
}
