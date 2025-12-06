# Drive-Well Academy - State of the Art Website

## 🚀 Overview

A premium, modern website for Drive-Well Academy featuring:
- Luxury automotive-inspired design
- Advanced animations and particle effects
- Glassmorphism and gradient effects
- Mobile-responsive layout
- SEO-optimized structure
- Interactive elements with magnetic effects
- Custom cursor animations
- 3D card tilting effects

## 📁 Files Included

- `index.html` - Main website structure
- `styles.css` - Premium styling with animations
- `animations.js` - Advanced JavaScript interactions
- `README.md` - This documentation file

## 🛠 Setup Instructions

### 1. Local Testing

1. Download all files to a folder
2. Open `index.html` in your browser
3. Test all features and animations

### 2. Customization

#### Contact Information
Update in `index.html`:
```html
<!-- Replace with your actual phone number -->
<a href="tel:+447XXXXXXXXX">

<!-- Replace with your WhatsApp number -->
<a href="https://wa.me/447XXXXXXXXX">

<!-- Replace with your email -->
<a href="mailto:info@drive-well-academy.co.uk">
```

#### Colors
Modify in `styles.css`:
```css
:root {
    --primary: #1e40af;      /* Main brand color */
    --accent: #f59e0b;       /* Accent color */
    --dark: #0f172a;         /* Background color */
}
```

#### Content
- Update text content directly in `index.html`
- Modify prices in the service cards
- Add your actual Google Reviews
- Update coverage areas for your specific postcodes

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
1. Create account at [vercel.com](https://vercel.com)
2. Upload your project folder
3. Get instant URL like `drive-well-academy.vercel.app`
4. Add custom domain later

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Instant deployment with free SSL
4. Custom domain available

### Option 3: GitHub Pages (Free)
1. Create GitHub repository
2. Upload files
3. Enable GitHub Pages in Settings
4. Access at `yourusername.github.io/drive-well-academy`

## 🌐 Custom Domain Setup

1. **Purchase Domain**: 
   - Register `drive-well-academy.co.uk` from Namecheap or GoDaddy
   - Cost: ~£10-15/year

2. **Connect to Hosting**:
   - Add custom domain in Vercel/Netlify settings
   - Update DNS records at your domain registrar
   - SSL certificate automatically provided

## 🎨 Key Features

### Animations
- **Particle Canvas**: Interactive background particles that react to mouse
- **GSAP Animations**: Smooth scroll-triggered animations
- **Magnetic Buttons**: Buttons follow cursor movement
- **3D Card Tilt**: Service cards tilt in 3D space
- **Custom Cursor**: Unique cursor with follower effect

### Performance
- Optimized for fast loading
- Lazy loading ready
- Mobile-first responsive design
- SEO-friendly structure

### Sections
1. **Hero**: Eye-catching intro with stats
2. **Services**: 6 service offerings with pricing
3. **About**: Company information and credentials
4. **Testimonials**: Rotating customer reviews
5. **Contact**: Form and contact methods
6. **Footer**: Links and certifications

## 📱 Mobile Optimization

The site is fully responsive with:
- Hamburger menu for mobile
- Touch-friendly interactions
- Optimized images and animations
- Fast loading on 4G/5G

## 🔧 Advanced Customization

### Adding WhatsApp Bot Link
In the services section, update the AI Theory Support card to link to your actual WhatsApp bot.

### Google Analytics
Add before `</head>` in index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### Google Maps Integration
Replace contact section map placeholder with:
```html
<iframe src="https://maps.google.com/maps?q=Bristol,UK&output=embed" 
        width="100%" height="400" frameborder="0"></iframe>
```

## 🚦 SEO Checklist

- [ ] Update meta description in HTML
- [ ] Add structured data for local business
- [ ] Create sitemap.xml
- [ ] Submit to Google Search Console
- [ ] Add robots.txt file
- [ ] Optimize images (use WebP format)
- [ ] Add alt text to all images

## 💡 Tips for Success

1. **Speed**: Keep images under 200KB
2. **Content**: Add blog section for SEO
3. **Social Proof**: Link actual Google Reviews
4. **Call-to-Action**: Make phone number clickable everywhere
5. **Local SEO**: Create area-specific landing pages

## 🆘 Support

For technical issues or customization help:
- Check browser console for errors
- Test in different browsers
- Ensure all files are in same folder
- Verify file paths are correct

## 📄 License

This website is created for Drive-Well Academy's exclusive use.
© 2024 Drive-Well Academy. All rights reserved.

---

**Ready to Launch!** 🎯

Your state-of-the-art website is ready for deployment. Follow the setup instructions above to go live and start attracting more driving students in Bristol!