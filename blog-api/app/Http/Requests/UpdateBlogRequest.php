<?php

namespace App\Http\Requests;

use App\Models\Blog;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateBlogRequest extends FormRequest
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
        $blog = Blog::where('slug', $this->route('blog'))->first();

        return [
            "category_id" => "required|exists:categories,id",
            "title" =>  [
                'required',
                'string',
                'min:3',
                Rule::unique('categories')->ignore($blog->id),
            ],
            "description" => "nullable|string",
            "cover_photo" => "nullable|image:jpg,jpeg,png",
            "photos" => "nullable|array",
            "photos.*" => "nullable|image:png,jpg,jpeg",
        ];
    }
}
