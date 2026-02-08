
# Deploying the Portfolio Website

Yes, you can deploy your React + Vite portfolio website completely for free using GitHub and Render.

## Steps to Deploy

### 1. Initialize Git (Already Done)
I have initialized a local Git repository for your project and committed all files.

### 2. Push to GitHub
1.  Go to **GitHub.com** and create a **New Repository**.
    *   Name it something like `my-portfolio`.
    *   Keep it **Public** (required for free tier on some platforms, though Render works with Private too).
    *   Do **NOT** initialize with README/gitignore (we already have them).
2.  In your terminal here (I can help run these commands if you give me the URL), or you can run them:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
    git branch -M main
    git push -u origin main
    ```

### 3. Deploy on Render
1.  Go to **[dashboard.render.com](https://dashboard.render.com)**.
2.  Click **New +** -> **Static Site**.
3.  Connect your GitHub account and select your `my-portfolio` repository.
4.  Render will automatically detect the settings for a Vite app:
    *   **Build Command:** `npm run build`
    *   **Publish Directory:** `dist`
5.  Click **Create Static Site**.

Your website will be live in a few minutes at a URL like `my-portfolio.onrender.com`.

### Alternative: Vercel or Netlify (Easier/Faster)
While Render works great, **Vercel** and **Netlify** are often preferred for frontend projects because they are slightly faster to set up and have better global CDNs for static sites. The process is identical:
1.  Push to GitHub.
2.  Login to Vercel/Netlify with GitHub.
3.  Import the repo.
4.  They auto-detect `npm run build` and `dist`.
5.  Deploy.
