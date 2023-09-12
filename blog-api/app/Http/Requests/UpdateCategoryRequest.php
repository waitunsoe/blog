<?php

namespace App\Http\Requests;

use App\Models\Category;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateCategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $category = Category::where('slug', $this->route('category'))->first();

        return [
            "name" => [
                'required',
                'string',
                'min:2',
                Rule::unique('categories')->ignore($category->id),
            ],
            "description" => "nullable|string|min:2"
        ];
    }
}
