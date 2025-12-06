# ⚡ Quick Start - Deploy in 5 Minutes

## The Fastest Way to Deploy

### 1️⃣ Prepare Your API Key
- Copy your Anthropic API key (starts with `sk-ant-...`)
- You'll paste it in step 4

### 2️⃣ Upload to GitHub

**Option A: Using GitHub Desktop (Easiest)**
1. Download [GitHub Desktop](https://desktop.github.com)
2. Install and sign in
3. File → Add Local Repository
4. Choose `/Users/jamalaidid/Downloads/files`
5. Commit message: "Initial commit"
6. Click "Publish repository"
7. Make it public
8. Click "Publish repository"

**Option B: Using Terminal**
```bash
cd /Users/jamalaidid/Downloads/files
git init
git add .
git commit -m "Initial commit"
# Then create repo on github.com and follow the instructions shown
```

### 3️⃣ Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click **"Add New Project"**
3. Find your repository → Click **"Import"**
4. Click **"Deploy"** (wait 1-2 minutes)

### 4️⃣ Add API Key (Critical!)

1. In Vercel dashboard → Click your project
2. **Settings** → **Environment Variables**
3. Click **"Add New"**
4. Name: `ANTHROPIC_API_KEY`
5. Value: Paste your API key
6. Check all environments (Production, Preview, Development)
7. Click **"Save"**

### 5️⃣ Redeploy

1. Go to **"Deployments"** tab
2. Click **⋯** (three dots) on latest deployment
3. Click **"Redeploy"**
4. Wait for it to finish

### 6️⃣ Test

Visit your site URL (shown in Vercel dashboard)
- Go to `/assistant.html`
- Ask a question
- Should work! ✅

---

**That's it! Your site is live and secure! 🎉**

For detailed instructions, see `DEPLOYMENT_GUIDE.md`

