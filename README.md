# JAA TRANSPORT - RGV Step Deck Transportation Landing Page

A professional, conversion-optimized landing page for JAA TRANSPORT, a Step Deck Transportation company serving the Rio Grande Valley.

## Features

- **AI-Powered Live Chat**: Intelligent chat assistant that answers questions about services, pricing, and equipment
- **Interactive Services Section**: Click on any service to see related images and details
- **Floating Phone Button**: Prominent call-to-action with phone number display
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Modern UI**: Built with Next.js 14 and Tailwind CSS
- **Professional Color Scheme**: Navy blue, gray, and metallic silver accents
- **Conversion Optimized**: Multiple CTAs and quote request forms

## Sections

1. **Hero Section**: Eye-catching hero with headline, CTA, and coverage area map
2. **Services Section**: Interactive service cards with image galleries
3. **Industries Section**: Showcase of industries served
4. **Why Choose Us**: Feature highlights and trust indicators
5. **About Section**: Company information and credentials
6. **Testimonials**: Customer reviews and ratings
7. **Quote Request**: Comprehensive quote form with contact information
8. **Footer**: Company info, service areas, and social links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. (Optional) Set up AI-powered chat:
```bash
# Copy the environment file
cp .env.example .env.local

# Add your OpenAI API key to .env.local
# OPENAI_API_KEY=your_api_key_here
```
Note: The live chat works without an API key using intelligent fallback responses, but AI integration provides more natural conversations.

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:
- Primary: Navy blue (#1e3a5f)
- Secondary: Gray (#4a5568)
- Accent: Silver (#c0c5ce)

### Content

Edit the component files in `/components` to update:
- Company name and contact information
- Service offerings
- Testimonials
- Industries served

### Images

The site currently uses placeholder images from Unsplash. Replace with your own:
- Upload your images to `/public/images`
- Update image URLs in component files

## Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe code
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library

## Interactive Features

The Services section includes interactive image switching:
- Click on any service card to view related images
- Click on image thumbnails to change the main image
- Smooth transitions and animations throughout

## Contact

For support or questions, contact jaatransport01@gmail.com

## License

All rights reserved © 2025 JAA TRANSPORT
