<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use App\Models\Blog;
use App\Models\BlogPhoto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $search = request('search');

        $blogs = Blog::when($search, function ($query) use ($search) {
            $query->where("name", "LIKE", "%$search%");
            $query->orWhere("description", "LIKE", "%$search%");
        })
            ->paginate(10);
            // ->through(function ($blog) {

            //     if (isset($blog->cover_photo)) {
            //         $blog->cover_photo = asset(Storage::url("blogs/" . $blog->cover_photo));
            //     }

            //     if (!empty($blog->blogPhotos)) {
            //         foreach ($blog->blogPhotos as $blogPhoto) {
            //             $blogPhoto->photo = asset(Storage::url("blogs/" . $blogPhoto->photo));
            //         }
            //     }
            //     return $blog;
            // });

        return response()->json([
            'message' => 'blogs are retrieved successfully',
            'data' => $blogs
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogRequest $request)
    {
        $payload = collect($request->validated());


        try {

            DB::beginTransaction();

            if ($request->hasFile("cover_photo")) {
                $photo = $request->file("cover_photo");
                $extension = $photo->extension();
                $photoName = "blog-cover-photo_" . uniqid() . "." . $extension;
                $photo->storeAs("blogs", $photoName, "public");

                $payload['cover_photo'] = $photoName;
            }

            $payload['slug'] = Str::slug($payload['title']);
            $blog = Blog::create($payload->toArray());

            if ($request->hasFile("photos")) {
                $photos = $request->file("photos");

                $blogPhotos = [];

                foreach ($photos as $photo) {

                    $extension = $photo->extension();
                    $photoName = "blog-photo_" . uniqid() . "." . $extension;
                    $photo->storeAs("blogs", $photoName, "public");

                    $blogPhotos[] = [
                        "blog_id" => $blog->id,
                        "photo" => $photoName
                    ];
                }

                BlogPhoto::insert($blogPhotos);
            }

            DB::commit();

            return response()->json([
                'message' => 'blog is stored successfully',
                'data' => $blog
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $blog = Blog::where('slug', $slug)->first();
        if (!$blog) {
            return response()->json([
                'message' => 'blog is NOT found!',
            ], 404);
        }

        if (isset($blog->cover_photo)) {
            $blog->cover_photo = asset(Storage::url("/blogs/{$blog->cover_photo}"));
        }

        if (!empty($blog->blogPhotos)) {
            foreach ($blog->blogPhotos as $blogPhoto) {
                $blogPhoto->photo = asset(Storage::url("/blogs/{$blogPhoto->photo}"));
            }
        }

        return response()->json([
            'message' => 'blog is retrieved successfully',
            'data' => $blog
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogRequest $request, $slug)
    {
        $blog = Blog::where('slug', $slug)->first();
        if (!$blog) {
            return response()->json([
                'message' => 'blog is NOT found!',
            ], 404);
        }
        $payload = collect($request->validated());

        try {

            DB::beginTransaction();

            if ($request->hasFile("cover_photo")) {

                if (isset($blog->cover_photo)) {
                    $photoPath = "public/blogs/" . $blog->cover_photo;
                    if (Storage::exists($photoPath)) {
                        Storage::delete($photoPath);
                    }
                }

                $photo = $request->file("cover_photo");
                $extension = $photo->extension();
                $photoName = "blog-cover-photo_" . uniqid() . "." . $extension;
                $photo->storeAs("blogs", $photoName, "public");

                $payload['cover_photo'] = $photoName;
            }

            $payload['slug'] = Str::slug($payload['name']);
            $blog->update($payload->toArray());

            if ($request->hasFile("photos")) {
                $photos = $request->file("photos");

                if (!empty($blog->blogPhotos)) {
                    foreach ($blog->blogPhotos as $blogPhoto) {
                        $photoPath = "public/blogs/" . $blogPhoto->photo;
                        if (Storage::exists($photoPath)) {
                            Storage::delete($photoPath);
                        }
                        $blogPhoto->delete();
                    }
                }

                $blogPhotos = [];
                foreach ($photos as $photo) {

                    $extension = $photo->extension();
                    $photoName = "blog-photo_" . uniqid() . "." . $extension;
                    $photo->storeAs("blogs", $photoName, "public");

                    $blogPhotos[] = [
                        "blog_id" => $blog->id,
                        "photo" => $photoName
                    ];
                }
                BlogPhoto::insert($blogPhotos);
            }

            return response()->json([
                'message' => 'blog is updated successfully',
                'data' => $blog
            ]);

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($slug)
    {
        $blog = Blog::where('slug', $slug)->first();
        if (!$blog) {
            return response()->json([
                'message' => 'blog is NOT found!',
            ], 404);
        }

        try {
            DB::beginTransaction();

            if (isset($blog->cover_photo)) {
                $photoPath = "public/blogs/" . $blog->cover_photo;
                if (Storage::exists($photoPath)) {
                    Storage::delete($photoPath);
                }
            }

            if (!empty($blog->blogPhotos)) {
                foreach ($blog->blogPhotos as $blogPhoto) {
                    $photoPath = "public/blogs/" . $blogPhoto->photo;
                    if (Storage::exists($photoPath)) {
                        Storage::delete($photoPath);
                    }
                    $blogPhoto->delete();
                }
            }

            $blog->delete();

            DB::commit();

            return response()->json([
                'message' => 'blog is deleted successfully!',
            ], 204);
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }
}
