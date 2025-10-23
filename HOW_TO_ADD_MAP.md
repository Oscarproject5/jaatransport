# How to Add Your RGV Map Image

## Current Map Setup

The coverage area currently shows:
1. **First Option**: Tries to load an image from `/images/rgv-map.png` with animated pin markers
2. **Fallback**: If no image is found, displays a beautiful SVG map with highways, Rio Grande river, and city markers

## To Add Your Own Map Image

### Step 1: Get or Create a Map Image

**Option A: Screenshot from Google Maps**
1. Go to Google Maps: https://www.google.com/maps
2. Search for "Rio Grande Valley, Texas"
3. Zoom to show all your service cities (Brownsville, McAllen, Harlingen, Edinburg, Pharr, Mission)
4. Take a screenshot (Windows: Win + Shift + S, or use Snipping Tool)
5. Save as `rgv-map.png`

**Option B: Create a Custom Map**
1. Use a tool like:
   - Canva (free): https://www.canva.com
   - Photoshop
   - GIMP (free)
2. Add your branding, highlight service areas
3. Export as PNG or JPG

**Option C: Use a Map Service**
1. Mapbox: https://www.mapbox.com
2. Google Maps Static API
3. OpenStreetMap

### Step 2: Prepare Your Image

**Specifications:**
- **Format**: PNG or JPG
- **Dimensions**: 800x600px or 1200x900px
- **File Size**: Under 1MB (optimize if larger)
- **Content**: Should show all 6 major RGV cities

**Optimize Your Image:**
- Use https://tinypng.com to compress
- Or use ImageOptim (Mac) / FileOptimizer (Windows)

### Step 3: Add Image to Your Project

1. Create the images folder if it doesn't exist:
   ```
   public/images/
   ```

2. Copy your map image to:
   ```
   public/images/rgv-map.png
   ```

3. Your folder structure should look like:
   ```
   public/
   ├── images/
   │   ├── rgv-map.png          ← Your map image
   │   └── services/            ← Service images folder
   ```

### Step 4: Adjust Pin Positions (Optional)

If you want to move the city pins to match your map's geography:

1. Open `components/CoverageMap.tsx`
2. Find the `cities` array (around line 10)
3. Adjust the `x` and `y` percentages:

```typescript
const cities = [
  { name: 'Brownsville', x: '20%', y: '35%', population: '180K+' },  // Left-top
  { name: 'McAllen', x: '80%', y: '35%', population: '140K+' },      // Right-top
  { name: 'Harlingen', x: '35%', y: '55%', population: '70K+' },     // Left-middle
  { name: 'Edinburg', x: '65%', y: '55%', population: '100K+' },     // Right-middle
  { name: 'Pharr', x: '40%', y: '75%', population: '80K+' },         // Left-bottom
  { name: 'Mission', x: '60%', y: '75%', population: '85K+' },       // Right-bottom
]
```

**Position Guide:**
- `x: '0%'` = far left, `x: '100%'` = far right
- `y: '0%'` = top, `y: '100%'` = bottom
- Adjust in 5% increments until pins align with your cities

### Step 5: Test Your Map

1. Save all files
2. Refresh your browser (http://localhost:3001)
3. Check if:
   - Map image loads correctly
   - City pins are in the right positions
   - Hover over pins shows city info

## Map Features

### What's Included:
- ✅ Animated pin markers for each city
- ✅ Hover tooltips showing city name and population
- ✅ Beautiful SVG fallback if image doesn't load
- ✅ Automatic error handling
- ✅ Responsive design

### The Fallback SVG Map Shows:
- Rio Grande river (blue curved line at bottom)
- Major highways (US-83, US-77, Highway 281)
- City markers with pulse effect
- City labels with population
- Grid overlay for professional look

## Customization Options

### Change City Information

Edit population or add more details in `components/CoverageMap.tsx`:

```typescript
const cities = [
  {
    name: 'Brownsville',
    x: '20%',
    y: '35%',
    population: '180K+',  // ← Change this
  },
  // ... more cities
]
```

### Remove or Add Cities

Simply add/remove entries from the `cities` array.

### Customize Colors

In the SVG fallback section, change:
- River color: `stroke="#60a5fa"`
- Highway color: `stroke` in `roadGrad` gradient
- City marker: `fill="#1e3a5f"`

## Troubleshooting

**Map image not showing?**
- Check file path: Should be `public/images/rgv-map.png`
- Check file name: Case-sensitive! Use lowercase
- Clear browser cache: Ctrl + Shift + R (hard refresh)
- Check browser console (F12) for errors

**Pins in wrong position?**
- Adjust `x` and `y` percentages in the `cities` array
- Use browser dev tools to test different values

**Image too large?**
- Compress with TinyPNG: https://tinypng.com
- Resize to 1200x900px max
- Convert to WebP for better performance

## Alternative: Use Google Maps Embed

If you prefer an interactive map, you can also embed Google Maps:

1. Go to: https://www.google.com/maps
2. Search "Rio Grande Valley, Texas"
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Add to your hero section

**Note**: The current design with image + pins looks more professional and loads faster!

## Need Help?

Check the browser console (F12) for error messages or contact support.
