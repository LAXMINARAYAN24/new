# Deployment Guide

## Overview
This repository is configured with automatic deployment to GitHub Pages. Any changes pushed to the `main` branch will automatically be deployed to your live site.

## Live Site URL
Once configured, your site will be available at:
- `https://LAXMINARAYAN24.github.io/new/`

## How Automatic Deployment Works

### GitHub Actions Workflow
The deployment is handled by a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
1. Triggers automatically when you push to the `main` branch
2. Checks out your code
3. Configures GitHub Pages
4. Uploads the site files as an artifact
5. Deploys the artifact to GitHub Pages

### Deployment Timeline
- Changes are typically live within 1-3 minutes after pushing
- You can monitor deployment status in the "Actions" tab of your repository

## Initial Setup (One-Time)

### Step 1: Enable GitHub Pages
1. Go to your repository on GitHub: `https://github.com/LAXMINARAYAN24/new`
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select **"GitHub Actions"**
5. Save the settings

### Step 2: Verify Workflow Permissions
1. In Settings, go to "Actions" → "General"
2. Scroll to "Workflow permissions"
3. Ensure "Read and write permissions" is selected
4. Check "Allow GitHub Actions to create and approve pull requests"
5. Save

## Making Changes and Deploying

### Standard Workflow
```bash
# 1. Make your changes to the code
# 2. Stage your changes
git add .

# 3. Commit your changes
git commit -m "Description of your changes"

# 4. Push to main branch (triggers automatic deployment)
git push origin main

# 5. Monitor deployment
# Go to: https://github.com/LAXMINARAYAN24/new/actions
```

### Viewing Deployment Status
1. Visit the Actions tab: `https://github.com/LAXMINARAYAN24/new/actions`
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Click on the workflow run to see detailed progress
4. Once complete (green checkmark), your changes are live!

## Manual Deployment

If you need to redeploy without making changes:
1. Go to the "Actions" tab
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select the `main` branch
5. Click "Run workflow"

## Troubleshooting

### Deployment Fails
- Check the Actions tab for error messages
- Verify that GitHub Pages is enabled in Settings
- Ensure workflow has proper permissions

### Changes Not Showing
- Wait 2-3 minutes for deployment to complete
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check if deployment completed successfully in Actions tab

### 404 Error
- Verify GitHub Pages is enabled
- Check that Source is set to "GitHub Actions"
- Ensure your index.html is in the root directory

## Features

### Automatic Deployment
- ✅ Triggers on every push to `main`
- ✅ No manual intervention required
- ✅ Fast deployment (1-3 minutes)

### Manual Deployment
- ✅ Can trigger from Actions tab
- ✅ Useful for redeployment without changes

### Concurrent Deployment Control
- ✅ Only one deployment at a time
- ✅ Queued deployments are skipped in favor of latest
- ✅ In-progress deployments complete before new ones start

## Best Practices

1. **Test Locally First**: Always test changes locally before pushing
2. **Meaningful Commits**: Use descriptive commit messages
3. **Monitor Deployments**: Check Actions tab after pushing
4. **Branch Strategy**: Consider using feature branches and merging to main
5. **Review Changes**: Check the live site after deployment completes

## Support

If you encounter issues:
1. Check the Actions tab for error logs
2. Verify repository settings
3. Review the workflow file (`.github/workflows/deploy.yml`)
4. Consult GitHub Pages documentation: https://docs.github.com/pages
