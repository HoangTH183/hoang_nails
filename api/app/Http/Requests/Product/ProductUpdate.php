<?php

namespace App\Http\Requests\Product;

use App\Http\Requests\ValidateResponse;
use Illuminate\Foundation\Http\FormRequest;

class ProductUpdate extends FormRequest
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
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'discount_price' => 'required|numeric',
            'tax_percent' => 'required|numeric',
            'product_category_id' => 'required|integer',
            'is_active' => 'required|integer|in:0,1',
        ];
    }
}
