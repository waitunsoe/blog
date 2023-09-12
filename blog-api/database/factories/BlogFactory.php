<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->sentence();
        return [
            "category_id" => 1,
            "title" => $title,
            "slug" => Str::slug($title),
            "description" => fake()->sentence(),
            "cover_photo" => fake()->imageUrl(),
        ];
    }
}
