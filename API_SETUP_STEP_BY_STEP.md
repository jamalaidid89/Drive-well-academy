# 🔧 Step-by-Step API Setup Guide

Follow these steps to set up your secure API for the AI assistant.

---

## 📋 Prerequisites Checklist

Before starting, make sure you have:
- [ ] Anthropic API key (get it from https://console.anthropic.com)
- [ ] GitHub account (free)
- [ ] Vercel account (free, we'll create it)

---

## 🎯 STEP 1: Get Your Anthropic API Key

### 1.1 Go to Anthropic Console
1. Open your web browser
2. Go to: **https://console.anthropic.com**
3. Sign in (or create an account if you don't have one)

### 1.2 Create/Find Your API Key
1. After logging in, look for **"API Keys"** in the menu (usually in Settings or top navigation)
2. Click **"Create Key"** or **"Generate New Key"**
3. Give it a name (e.g., "Drive-Well Academy Website")
4. Click **"Create"**
5. **IMPORTANT:** Copy your API key immediately (it starts with `sk-ant-...`)
   - It looks like: `sk-ant-api03-xxxxx...`
   - ⚠️ **Save this somewhere safe - you can't see it again!**

---

## 🎯 STEP 2: Create GitHub Repository

### 2.1 Go to GitHub
1. Open: **https://github.com**
2. Sign in (or create a free account)

### 2.2 Create New Repository
1. Click the **+** icon in the top right corner
2. Select **"New repository"**

### 2.3 Fill in Repository Details
- **Repository name:** `drive-well-academy` (or any name you prefer)
- **Description:** "Drive-Well Academy Website" (optional)
- **Visibility:** Choose **Public** or **Private** (your choice)
- ⚠️ **IMPORTANT:** Do NOT check "Add a README file"
- ⚠️ **IMPORTANT:** Do NOT add .gitignore or license
- Click the green **"Create repository"** button

### 2.4 You'll See Setup Instructions
GitHub will show you a page with commands. **Don't close this page yet** - you'll need the repository URL.

---

## 🎯 STEP 3: Push Your Code to GitHub

### 3.1 Open Terminal
- **Mac:** Press `Cmd + Space`, type "Terminal", press Enter
- **Windows:** Press `Win + R`, type "cmd", press Enter

### 3.2 Navigate to Your Project
Type this command (or copy-paste):
```bash
cd /Users/jamalaidid/Downloads/files

```

Press Enter.

### 3.3 Connect to GitHub
Type this command, **BUT replace `YOUR_USERNAME` and `REPO_NAME`** with your actual values:

```bash
git remote add origin https://github.com/YOUR_USERNAME/drive-well-academy.git
```

**Example:** If your username is `johnsmith` and repo is `drive-well-academy`:
```bash
git remote add origin https://github.com/johnsmith/drive-well-academy.git
```

Press Enter.

### 3.4 Set Main Branch
```bash
git branch -M main
```
Press Enter.

### 3.5 Push Your Code
```bash
git push -u origin main
```
Press Enter.

**What happens:**
- You might be asked for your GitHub username and password
- For password, use a **Personal Access Token** (not your GitHub password)
- If you need to create one: GitHub → Settings → Developer settings → Personal access tokens → Generate new token

### 3.6 Verify Upload
1. Go back to your GitHub repository page
2. Refresh the page (F5 or Cmd+R)
3. You should see all your files!

---

## 🎯 STEP 4: Deploy to Vercel

### 4.1 Go to Vercel
1. Open: **https://vercel.com**
2. Click **"Sign Up"** (top right)

### 4.2 Sign Up with GitHub
1. Click **"Continue with GitHub"**
2. Authorize Vercel to access your GitHub account
3. Complete the signup process

### 4.3 Import Your Project
1. After logging in, you'll see your dashboard
2. Click **"Add New..."** button (or "Import Project")
3. Find your repository: **"drive-well-academy"** (or whatever you named it)
4. Click **"Import"** next to it

### 4.4 Configure Project Settings
You'll see a configuration page:
- **Project Name:** Leave as is (or change if you want)
- **Framework Preset:** Leave as "Other" (Vercel auto-detects)
- **Root Directory:** Leave as `./` (default)
- **Build Command:** Leave empty
- **Output Directory:** Leave empty
- **Install Command:** Leave empty

**Click the blue "Deploy" button** at the bottom.

### 4.5 Wait for Deployment
- Vercel will build and deploy your site
- This takes about 1-2 minutes
- You'll see progress messages
- Wait for "Congratulations! Your project has been deployed" message
- You'll see a URL like: `https://drive-well-academy.vercel.app`

✅ **Don't close this page yet!** You need to add the API key next.

---

## 🎯 STEP 5: Add Your API Key (CRITICAL!)

### 5.1 Go to Project Settings
1. In Vercel, click on your project name (the one you just deployed)
2. Click the **"Settings"** tab at the top

### 5.2 Navigate to Environment Variables
1. In the left sidebar, click **"Environment Variables"**
2. You'll see an empty list or existing variables

### 5.3 Add Your API Key
1. Click the **"Add New"** button
2. Fill in:
   - **Name (Key):** `ANTHROPIC_API_KEY`
     - ⚠️ Must be EXACTLY: `ANTHROPIC_API_KEY` (copy-paste this)
   - **Value:** Paste your Anthropic API key here
     - It should start with `sk-ant-...`
   - **Environments:** Check ALL THREE boxes:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
3. Click **"Save"**

### 5.4 Verify It's Added
- You should see `ANTHROPIC_API_KEY` in the list
- The value will be hidden (shows as dots) - this is normal and secure

---

## 🎯 STEP 6: Redeploy Your Site

### 6.1 Go to Deployments
1. Click the **"Deployments"** tab at the top
2. You'll see a list of deployments
3. Find the latest one (should be at the top)

### 6.2 Trigger Redeploy
1. Click the **⋯** (three dots) on the right side of the latest deployment
2. Click **"Redeploy"**
3. Confirm by clicking **"Redeploy"** again in the popup
4. Wait for deployment to complete (about 1 minute)

---

## 🎯 STEP 7: Test Your Site!

### 7.1 Visit Your Live Site
1. Click on your deployment
2. Click the domain URL (e.g., `https://drive-well-academy.vercel.app`)
3. Your site should open in a new tab

### 7.2 Test the AI Assistant
1. Navigate to the assistant page:
   - Either click a link in your navigation
   - Or go directly to: `https://your-site.vercel.app/assistant.html`
2. You should see the AI assistant interface
3. Type a test question like: **"What are your prices?"**
4. Click Send
5. **If it works:** You'll get a response from the AI! ✅
6. **If it doesn't work:** See troubleshooting below

---

## ✅ Success Checklist

After completing all steps, verify:
- [ ] Code is on GitHub
- [ ] Site is deployed on Vercel
- [ ] API key is added in Vercel settings
- [ ] Site has been redeployed after adding API key
- [ ] AI assistant responds to questions

---

## 🐛 Troubleshooting

### Problem: "Server configuration error"
**Solution:**
- API key not set correctly
- Go back to Step 5
- Make sure the key name is exactly: `ANTHROPIC_API_KEY`
- Make sure you checked all three environments
- Make sure you redeployed (Step 6)

### Problem: "Failed to get response from AI service"
**Solutions:**
1. Check your API key is correct
2. Check Anthropic account has credits
3. Check Vercel deployment logs:
   - Go to Vercel → Your Project → Deployments
   - Click on the latest deployment
   - Click "Functions" tab
   - Look for any error messages

### Problem: Can't push to GitHub
**Solutions:**
1. Make sure you created the repository first (Step 2)
2. Make sure you used the correct repository URL
3. For password, use a Personal Access Token:
   - GitHub → Settings → Developer settings
   - Personal access tokens → Tokens (classic)
   - Generate new token
   - Give it "repo" permissions
   - Use this token as your password

### Problem: Vercel deployment failed
**Solutions:**
1. Check deployment logs for errors
2. Make sure all files were pushed to GitHub
3. Make sure `api/chat.js` exists in your repository

### Problem: AI assistant page shows error
**Solutions:**
1. Make sure you're using the deployed URL (not `file://`)
2. Check browser console (F12 → Console tab) for errors
3. Make sure `/api/chat` endpoint exists:
   - Test by going to: `https://your-site.vercel.app/api/chat`
   - Should show an error (not 404) - this means the function exists

---

## 📞 Quick Reference

**Your GitHub repo:**
```
https://github.com/YOUR_USERNAME/drive-well-academy
```

**Your Vercel site:**
```
https://drive-well-academy.vercel.app
```
(or whatever Vercel assigned)

**API Key location:**
- Vercel → Your Project → Settings → Environment Variables

**Important files:**
- `api/chat.js` - Serverless function (handles API calls)
- `assistant.html` - Frontend page (uses `/api/chat`)

---

## 🎉 You're Done!

Once everything is working, your AI assistant will:
- ✅ Be secure (API key hidden)
- ✅ Work on your live website
- ✅ Respond to user questions
- ✅ Scale automatically

**Need help?** Check the troubleshooting section above or review each step carefully.

---

## 📝 Summary of What We Did

1. ✅ Created secure backend (`api/chat.js`)
2. ✅ Updated frontend to use secure endpoint
3. ✅ Pushed code to GitHub
4. ✅ Deployed to Vercel
5. ✅ Added API key as environment variable
6. ✅ Redeployed with API key
7. ✅ Tested AI assistant

Your API is now secure and live! 🔐🚀

