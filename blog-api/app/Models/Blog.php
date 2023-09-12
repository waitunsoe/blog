<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $with = ['blogPhotos', 'category'];

    protected $fillable = [
        "category_id",
        "cover_photo",
        "title",
        "slug",
        "description"
    ];

    public function blogPhotos()
    {
        return $this->hasMany(BlogPhoto::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
