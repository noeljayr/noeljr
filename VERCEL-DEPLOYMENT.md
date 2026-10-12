# Deploying to Vercel - Quick Guide

## Current Status
✅ **vercel.json** configuration file created
✅ All URLs updated to **https://www.noeljr.com**

## Deployment Steps

### Option 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory**
   ```bash
   cd c:\Users\xps\Documents\GitHub\noeljr
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (first time) or **Y** (redeployment)
   - Project name? **noeljr** (or your preferred name)
   - In which directory is your code located? **./`**
   - Want to override settings? **N**

5. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Option 2: Using Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click **"Add New Project"**
3. Import your Git repository (GitHub/GitLab/Bitbucket)
4. Configure:
   - **Framework Preset:** Other
   - **Root Directory:** ./
   - **Build Command:** (leave empty)
   - **Output Directory:** (leave empty)
5. Click **"Deploy"**

### Option 3: Connect GitHub for Auto-Deploy

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Add SEO optimizations and Vercel config"
   git push origin main
   ```

2. In Vercel Dashboard:
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-deploy on every push to main

## Configuration Explained

The **vercel.json** file handles:
- Static file serving
- SPA routing (all routes → index.html)
- Caching headers for performance
- Security headers
- Proper MIME types

## Domain Setup

### If using custom domain (www.noeljr.com):

1. **In Vercel Dashboard:**
   - Go to Project Settings → Domains
   - Add **www.noeljr.com**
   - Follow DNS instructions

2. **DNS Configuration:**
   Add these records to your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Redirect non-www to www (optional):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

## Testing After Deployment

1. **Check homepage:** https://www.noeljr.com
2. **Test sitemap:** https://www.noeljr.com/sitemap.xml
3. **Test robots:** https://www.noeljr.com/robots.txt
4. **Test routes:** All hash routes (#work, #about, etc.) should work
5. **Test static assets:** CSS, JS, images should load

## Common Issues & Fixes

### Issue: 404 on refresh
**Fix:** Already handled in vercel.json with catch-all route

### Issue: Static files not loading
**Fix:** Check file paths are relative (./styles.css not /styles.css)

### Issue: Domain not working
**Fix:** Verify DNS propagation (can take up to 48 hours)

### Issue: Old content showing
**Fix:** 
```bash
vercel --prod --force
```

## Performance Checks

After deployment, test with:
- **Lighthouse:** Chrome DevTools → Lighthouse tab
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **GTmetrix:** https://gtmetrix.com/

## Next Steps After Deployment

1. ✅ Verify site loads at https://www.noeljr.com
2. 📊 Submit sitemap to Google Search Console
3. 🔍 Test all SEO meta tags with view-source
4. 📱 Test mobile responsiveness
5. ⚡ Check Core Web Vitals

## Environment Variables (if needed later)

In Vercel Dashboard → Settings → Environment Variables:
```
VARIABLE_NAME=value
```

## Rollback (if needed)

```bash
vercel rollback
```

Or in Dashboard: Deployments → Previous Deployment → Promote to Production

---

**Note:** The .htaccess file won't work on Vercel (it uses Nginx). All Apache directives have been converted to vercel.json configuration.
