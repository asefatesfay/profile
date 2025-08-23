# Profile Images

## Adding Your Profile Picture

1. Place your profile picture in this directory (`public/images/`)
2. Name it `profile.jpg` (or update the path in `src/data/skillsData.js` if you use a different name/format)
3. Recommended dimensions: 400x400px or larger (square aspect ratio works best)
4. Supported formats: JPG, PNG, WebP, SVG

## Current Configuration

The profile picture is configured in `src/data/skillsData.js` in the `personalInfo` object:

```javascript
profilePicture: '/images/profile.jpg'
```

If the image fails to load, it will fallback to showing your initials.
