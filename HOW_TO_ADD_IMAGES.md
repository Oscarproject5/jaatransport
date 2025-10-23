# How to Add Your Own Images

## Current Image Setup

Your site is currently using placeholder images with automatic fallback. The images will display properly whether from external URLs or local files.

## Option 1: Add Local Images (Recommended)

### Step 1: Add Your Images to the Project

1. Create these folders if they don't exist:
   - `public/images/services/`

2. Add your images with these naming conventions:
   ```
   public/images/services/
   ├── local-freight-1.jpg
   ├── local-freight-2.jpg
   ├── local-freight-3.jpg
   ├── heavy-equipment-1.jpg
   ├── heavy-equipment-2.jpg
   ├── heavy-equipment-3.jpg
   ├── material-steel-1.jpg
   ├── material-steel-2.jpg
   ├── material-steel-3.jpg
   ├── agricultural-1.jpg
   ├── agricultural-2.jpg
   ├── agricultural-3.jpg
   ├── expedited-1.jpg
   ├── expedited-2.jpg
   ├── expedited-3.jpg
   ├── oversized-1.jpg
   ├── oversized-2.jpg
   └── oversized-3.jpg
   ```

### Step 2: Update the ServicesSection Component

Open `components/ServicesSection.tsx` and update the images arrays:

```typescript
{
  id: 'local-freight',
  title: 'Local Freight Hauling',
  description: 'Same-day to next-day deliveries across the RGV region',
  icon: <Truck className="w-8 h-8" />,
  color: '#1e3a5f',
  images: [
    '/images/services/local-freight-1.jpg',
    '/images/services/local-freight-2.jpg',
    '/images/services/local-freight-3.jpg'
  ]
},
```

Repeat for all services.

## Option 2: Use External Image URLs

If you have images hosted elsewhere (e.g., your own server, cloud storage):

1. Open `components/ServicesSection.tsx`
2. Replace the placeholder URLs with your actual image URLs:

```typescript
images: [
  'https://yourdomain.com/images/truck-1.jpg',
  'https://yourdomain.com/images/truck-2.jpg',
  'https://yourdomain.com/images/truck-3.jpg'
]
```

3. If using a new domain, add it to `next.config.js`:

```javascript
images: {
  domains: ['picsum.photos', 'images.unsplash.com', 'yourdomain.com'],
  // ...
}
```

## Image Specifications

For best results:
- **Format**: JPG or WebP (for best performance)
- **Resolution**: 1600x1200px or higher
- **Aspect Ratio**: 4:3 or 16:9
- **File Size**: Under 500KB per image (compress if needed)

## Recommended Image Types per Service

1. **Local Freight Hauling**:
   - Step deck trucks on highways
   - Loading/unloading at local facilities
   - Trucks in RGV areas

2. **Heavy Equipment Transport**:
   - Step deck loaded with excavators, bulldozers
   - Forklift transport
   - Construction machinery being secured

3. **Material & Steel Hauling**:
   - Steel beams on flatbeds
   - Pipe bundles
   - Building materials loads

4. **Agricultural Equipment**:
   - Tractors on step decks
   - Farm implements
   - Agricultural machinery transport

5. **Expedited Deliveries**:
   - Trucks in motion
   - Time-sensitive deliveries
   - Rush job completions

6. **Oversized Loads**:
   - Wide load transport
   - Tall equipment
   - Permit loads with escort

## Testing Your Images

1. Add your images to the `public/images/services/` folder
2. Update the `ServicesSection.tsx` file
3. Refresh your browser
4. Click on each service to verify all images load correctly
5. Click on the thumbnails to test the switching functionality

## Image Fallback

The site automatically handles missing images by showing a branded placeholder with your company colors and service name. This ensures the site always looks professional even if an image fails to load.

## Need Help?

If images aren't displaying:
1. Check file paths are correct
2. Ensure image files exist in the correct folder
3. Check browser console for errors (F12 > Console tab)
4. Verify image file permissions
5. Clear browser cache and hard refresh (Ctrl+F5)
