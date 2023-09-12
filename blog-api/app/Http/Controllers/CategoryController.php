<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use Exception;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $search = request('search');

        $categories = Category::when($search, function ($query) use ($search) {
            $query->where("name", "LIKE", "%$search%");
            $query->orWhere("description", "LIKE", "%$search%");
        })->paginate(10);

        return response()->json([
            'message' => 'categories are retrieved successfully',
            'data' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        $payload = collect($request->validated());

        $payload['slug'] = Str::slug($payload['name']);
        $category = Category::create($payload->toArray());
        return response()->json([
            'message' => 'category is stored successfully',
            'data' => $category
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $category = Category::where('slug', $slug)->first();
        if (!$category) {
            return response()->json([
                'message' => 'category is NOT found!',
            ], 404);
        }
        return response()->json([
            'message' => 'category is retrieved successfully',
            'data' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, $slug)
    {
        $category = Category::where('slug', $slug)->first();

        $payload = collect($request->validated());

        $payload['slug'] = Str::slug($payload['name']);
        $category->update($payload->toArray());
        return response()->json([
            'message' => 'category is updated successfully',
            'data' => $category
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($slug)
    {
        $category = Category::where('slug', $slug)->first();
        if (!$category) {
            return response()->json([
                'message' => 'category is NOT found!',
            ], 404);
        }

        $category->delete();
        return response()->json([
            'message' => 'category is deleted successfully!',
        ], 204);
    }
}
