# 🚀 Step-by-Step Deployment Guide

This guide will walk you through deploying your site with secure API access.

## 📋 Prerequisites

1. **Anthropic API Key** - Get it from [console.anthropic.com](https://console.anthropic.com)
   - Your API key looks like: `sk-ant-api03-...`
   - Keep it secret!

2. **GitHub Account** (free) - [github.com](https://github.com)

3. **Vercel Account** (free) - [vercel.com](https://vercel.com)

---

## 🎯 Option 1: Quick Deploy with Vercel (Recommended - 10 minutes)

### Step 1: Get Your API Key Ready
- Copy your Anthropic API key
- You'll need it in Step 5

### Step 2: Create GitHub Repository

1. **Go to GitHub:**
   - Visit [github.com](https://github.com)
   - Click the **+** icon (top right) → **New repository**

2. **Create repository:**
   - Name: `drive-well-academy` (or any name)
   - Description: "Drive-Well Academy Website"
   - Choose **Public** (or Private if you prefer)
   - ⚠️ **DO NOT** check "Initialize with README"
   - Click **Create repository**

3. **Upload your files to GitHub:**

   Open Terminal (or Command Prompt) in your project folder and run:

   ```bash
   cd /Users/jamalaidid/Downloads/files
   
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Create first commit
   git commit -m "Initial commit - Drive-Well Academy website"
   
   # Add your GitHub repository (replace YOUR_USERNAME and REPO_NAME)
   git remote add origin https://github.com/YOUR_USERNAME/drive-well-academy.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

   **Replace `YOUR_USERNAME` and `REPO_NAME` with your actual GitHub username and repository name!**

   Example: `git remote add origin https://github.com/johndoe/drive-well-academy.git`

### Step 3: Deploy to Vercel

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click **Sign Up** (or **Log In** if you have an account)
   - Sign in with GitHub (easiest option)

2. **Import your project:**
   - Click **Add New Project**
   - You'll see your GitHub repositories
   - Find and click **Import** on `drive-well-academy` (or your repo name)

3. **Configure project:**
   - **Project Name:** `drive-well-academy` (or leave default)
   - **Framework Preset:** Other (Vercel will auto-detect)
   - **Root Directory:** `./` (leave as default)
   - Click **Deploy** (don't worry about environment variables yet)

4. **Wait for deployment:**
   - Vercel will build and deploy your site
   - This takes about 1-2 minutes
   - You'll see a success message when done

### Step 4: Add Your API Key (IMPORTANT!)

1. **Go to your project dashboard:**
   - Click on your project name in Vercel dashboard

2. **Navigate to Settings:**
   - Click **Settings** tab (top menu)
   - Click **Environment Variables** (left sidebar)

3. **Add the API key:**
   - Click **Add New**
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** Paste your Anthropic API key here
   - **Environments:** Check all three:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
   - Click **Save**

4. **Redeploy:**
   - Go to **Deployments** tab
   - Click the **⋯** (three dots) on the latest deployment
   - Click **Redeploy**
   - Confirm **Redeploy**
   - Wait for it to finish (about 1 minute)

### Step 5: Test Your Site

1. **Visit your live site:**
   - Your site URL is: `https://your-project-name.vercel.app`
   - Click the link in Vercel dashboard

2. **Test the AI Assistant:**
   - Navigate to the assistant page
   - Try asking a question
   - It should work! 🎉

---

## 🎯 Option 2: Deploy with Netlify

### Step 1-2: Same as Vercel (GitHub setup)

### Step 3: Deploy to Netlify

1. **Go to Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub

2. **Import project:**
   - Click **Add new site** → **Import an existing project**
   - Connect to GitHub
   - Select your repository
   - Click **Deploy site**

### Step 4: Add API Key (Netlify)

1. Go to **Site settings**
2. Click **Environment variables**
3. Click **Add variable**
4. **Key:** `ANTHROPIC_API_KEY`
5. **Value:** Your API key
6. Click **Save**
7. Go to **Deployments** → **Trigger deploy** → **Clear cache and deploy site**

---

## 🧪 Testing Locally (Before Deploying)

Want to test on your computer first? Here's how:

### Install Vercel CLI:

```bash
npm install -g vercel
```

### Set up and test:

```bash
cd /Users/jamalaidid/Downloads/files

# Login to Vercel
vercel login

# Link this project
vercel

# Add environment variable
vercel env add ANTHROPIC_API_KEY
# When prompted, paste your API key

# Run local development server
vercel dev
```

Your site will be at `http://localhost:3000`

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Site loads at your Vercel/Netlify URL
- [ ] All pages work (Home, Services, About, etc.)
- [ ] AI Assistant page loads (`/assistant.html`)
- [ ] Try asking the AI a question - does it respond?
- [ ] Check browser console (F12) - no errors?
- [ ] Check Vercel/Netlify logs for any errors

---

## 🐛 Troubleshooting

### "Server configuration error"
**Problem:** API key not set  
**Solution:** 
- Double-check you added `ANTHROPIC_API_KEY` in environment variables
- Make sure you redeployed after adding it
- Verify the key starts with `sk-ant-`

### "Failed to get response from AI service"
**Problem:** API key invalid or no credits  
**Solution:**
- Check your Anthropic account has credits
- Verify API key is correct in Vercel/Netlify settings
- Check server logs in dashboard

### AI Assistant doesn't load
**Problem:** Frontend can't reach API  
**Solution:**
- Check browser console for errors
- Verify you're using the deployed URL (not `file://`)
- Check that `/api/chat` endpoint exists in your deployment logs

### Site works locally but not deployed
**Problem:** Environment variable not set  
**Solution:**
- Make sure you added the environment variable in your hosting platform
- Redeploy after adding environment variables
- Check all environment checkboxes (Production, Preview, Development)

---

## 📞 Need Help?

1. Check Vercel/Netlify deployment logs
2. Check browser console (F12 → Console tab)
3. Verify API key is correct
4. Make sure all files were committed to GitHub

---

## 🎉 You're Done!

Once deployed and tested, your site is live with secure API access! Your API key is safely stored on the server and never exposed to browsers.

**Your site URL:** `https://your-project.vercel.app`  
**Next steps:** Add a custom domain if desired!

