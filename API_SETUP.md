# Secure API Setup Guide

Your AI assistant now uses a secure backend to protect your Anthropic API key. The API key is no longer exposed in the client-side code.

## ✅ What's Been Changed

1. **Created secure serverless functions:**
   - `api/chat.js` - For Vercel deployments
   - `netlify/functions/chat.js` - For Netlify deployments

2. **Updated `assistant.html`:**
   - Removed the exposed `API_KEY` constant
   - Updated to call the secure `/api/chat` endpoint

## 🚀 Deployment Instructions

### Option 1: Vercel (Recommended)

1. **Push your code to GitHub** (if not already)

2. **Import project in Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your repository

3. **Add Environment Variable:**
   - Go to Project Settings → Environment Variables
   - Add new variable:
     - **Name:** `ANTHROPIC_API_KEY`
     - **Value:** Your actual Anthropic API key (starts with `sk-ant-...`)
   - Save

4. **Deploy:**
   - Vercel will automatically detect the `api/` folder and deploy it as serverless functions
   - Your site will be live with secure API access!

### Option 2: Netlify

1. **Push your code to GitHub** (if not already)

2. **Import project in Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your repository

3. **Add Environment Variable:**
   - Go to Site settings → Environment variables
   - Click "Add variable"
   - **Key:** `ANTHROPIC_API_KEY`
   - **Value:** Your actual Anthropic API key (starts with `sk-ant-...`)
   - Save

4. **Deploy:**
   - Netlify will automatically detect `netlify/functions/` and deploy
   - Your site will be live with secure API access!

## 🧪 Testing Locally (Optional)

### With Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Link your project
vercel

# Set environment variable locally
vercel env add ANTHROPIC_API_KEY

# Run dev server
vercel dev
```

### With Netlify CLI:

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Link your project
netlify init

# Set environment variable locally
netlify env:set ANTHROPIC_API_KEY your-key-here

# Run dev server
netlify dev
```

## 🔒 Security Benefits

✅ API key is never exposed to browsers  
✅ Server-side validation and error handling  
✅ CORS protection  
✅ Automatic scaling with serverless functions  
✅ No separate server to manage  

## ❓ Troubleshooting

### "Server configuration error"
- Make sure you've added the `ANTHROPIC_API_KEY` environment variable in your hosting platform
- Redeploy after adding the variable

### "Failed to get response from AI service"
- Check your API key is correct
- Verify your Anthropic account has sufficient credits
- Check server logs in Vercel/Netlify dashboard

### CORS errors
- The serverless functions include CORS headers
- If issues persist, check your deployment logs

## 📝 Notes

- The API key is stored as an environment variable, never in your code
- Both Vercel and Netlify provide free tiers with generous limits
- Serverless functions automatically scale with traffic
- You can update the API key anytime in your hosting platform's settings without code changes

---

**Your API is now secure!** 🔐

