# Senior Engineer Profile - GitHub Actions Deployment Guide

## 🚀 Deploy to AWS Amplify using GitHub Actions (No Local AWS Setup Required!)

### Prerequisites
- GitHub repository
- AWS account
- **No local AWS CLI configuration needed!**

### Step 1: Create AWS IAM User (One-time setup)

1. **Go to AWS Console → IAM → Users → Create User**
2. **User name**: `github-actions-amplify`
3. **Attach policies directly**:
   - `AdministratorAccess-Amplify`
   - Or create custom policy with these permissions:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "amplify:*"
         ],
         "Resource": "*"
       }
     ]
   }
   ```

4. **Create Access Key**:
   - Go to Security credentials tab
   - Create access key → Use case: Other
   - Save the Access Key ID and Secret Access Key

### Step 2: Set Up GitHub Repository Secrets

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Senior Engineer Profile"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Add GitHub Secrets**:
   - Go to your GitHub repo → Settings → Secrets and variables → Actions
   - Add these repository secrets:
     - `AWS_ACCESS_KEY_ID`: Your IAM user access key
     - `AWS_SECRET_ACCESS_KEY`: Your IAM user secret key
     - `AWS_REGION`: `us-east-1` (or your preferred region)

### Step 3: Deploy using GitHub Actions

1. **First deployment** (creates the Amplify app):
   - Push any commit to `main` branch
   - GitHub Actions will automatically run
   - Check Actions tab for deployment progress

2. **Get your live URL**:
   - Go to AWS Console → AWS Amplify
   - Find your app (name: `senior-engineer-profile`)
   - Copy the live URL (format: `https://main.d1234567890.amplifyapp.com`)

### Step 4: Automatic Deployments

- Every push to `main` branch automatically deploys
- Pull request creates preview deployments
- Check GitHub Actions tab for deployment status

## Alternative: Manual Amplify Setup (Simpler)

If you prefer a simpler approach without GitHub Actions:

### Option 1: GitHub Integration (Recommended)
1. **Go to AWS Amplify Console**
2. **New app → Host web app → GitHub**
3. **Connect your repository**
4. **Build settings**: Use the provided `amplify.yml`
5. **Deploy**

### Option 2: Manual Upload
1. **Build locally**:
   ```bash
   npm run build
   ```
2. **Go to AWS Amplify Console**
3. **New app → Deploy without Git**
4. **Upload the `dist` folder**

## Project Structure
```
profile/
├── .github/workflows/
│   ├── deploy-amplify.yml          # Main deployment pipeline
│   └── deploy-amplify-cli.yml      # Alternative using Amplify CLI
├── amplify.yml                     # Amplify build configuration
├── deploy.sh                       # Local deployment script
└── src/                           # Your React application
```

## Build Configuration

The `amplify.yml` file is already configured for your project:
- Node.js 18
- Builds React app with Vite
- Outputs to `dist` directory
- Includes proper routing for SPA

## Troubleshooting

### Build Issues
- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility
- Check build logs in Amplify Console

### Deployment Issues
- Verify GitHub secrets are set correctly
- Check AWS IAM permissions
- Review GitHub Actions logs

### Custom Domain (Optional)
1. Go to Amplify Console → Your App → Domain management
2. Add your custom domain
3. Amplify handles SSL certificates automatically

## URLs
- **Development**: `http://localhost:3002`
- **Production**: Will be provided after first deployment
- **GitHub Actions**: Check your repo's Actions tab

---

**Need help?** Check the GitHub Actions logs or AWS Amplify Console for detailed error messages.
