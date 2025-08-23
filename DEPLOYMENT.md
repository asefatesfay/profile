# Deployment Setup Guide

## Quick Setup for AWS Amplify Deployment

### GitHub Actions Deployment (Automated)

The repository includes GitHub Actions workflows for automated deployment. Here's how to set them up:

#### Required GitHub Secrets

To enable automatic deployment to AWS Amplify, add these secrets to your GitHub repository:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the following secrets:

| Secret Name | Description | Required |
|-------------|-------------|----------|
| `AWS_ACCESS_KEY_ID` | AWS IAM user access key ID | ✅ |
| `AWS_SECRET_ACCESS_KEY` | AWS IAM user secret access key | ✅ |
| `AMPLIFY_APP_ID` | Your AWS Amplify app ID | ✅ |
| `AWS_REGION` | AWS region (optional, defaults to us-east-1) | ❌ |

### How to Get These Values

#### 1. AWS Credentials (`AWS_ACCESS_KEY_ID` & `AWS_SECRET_ACCESS_KEY`)

**Option A: Create New IAM User (Recommended)**
```bash
# Using AWS CLI
aws iam create-user --user-name github-actions-deployer
aws iam attach-user-policy --user-name github-actions-deployer --policy-arn arn:aws:iam::aws:policy/AdministratorAccess-Amplify
aws iam create-access-key --user-name github-actions-deployer
```

**Option B: Use Existing IAM User**
- Ensure the user has `AdministratorAccess-Amplify` policy attached
- Generate new access keys in the AWS console

#### 2. Amplify App ID (`AMPLIFY_APP_ID`)

**Create new Amplify app:**
```bash
# Using AWS CLI
aws amplify create-app --name "your-portfolio-app" --repository "https://github.com/yourusername/your-repo"
```

**Find existing app ID:**
```bash
# List all Amplify apps
aws amplify list-apps

# Or check in AWS Console
# Navigate to AWS Amplify → Apps → Your App → General → App ARN
# The App ID is the last part after the slash
```
5. Select your repository and branch (main/master)
6. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
7. Review and deploy

### Option 2: GitHub Actions Pipeline
Use the provided GitHub Actions workflows for more control.

#### Setup Steps:

1. **Create AWS IAM User**
   - Go to AWS IAM Console
   - Create new user: `amplify-deploy-user`
   - Attach policies:
     - `AmplifyBackendDeployFullAccess`
     - `AWSAmplifyConsoleFullAccess`
   - Save Access Key ID and Secret Access Key

2. **Create Amplify App**
   ```bash
   # Install AWS CLI and Amplify CLI
   npm install -g @aws-amplify/cli
   
   # Configure AWS credentials
   aws configure
   
   # Initialize Amplify project
   amplify init
   
   # Add hosting
   amplify add hosting
   # Choose: Amazon CloudFront and S3
   
   # Deploy
   amplify publish
   ```

3. **Configure GitHub Secrets**
   Go to your GitHub repository → Settings → Secrets and variables → Actions
   
   Add these secrets:
   - `AWS_ACCESS_KEY_ID`: Your AWS Access Key ID
   - `AWS_SECRET_ACCESS_KEY`: Your AWS Secret Access Key
   - `AWS_REGION`: Your AWS region (e.g., us-east-1)
   - `AMPLIFY_APP_ID`: Your Amplify App ID (from Amplify console)

4. **Choose Workflow**
   - Use `deploy-amplify.yml` for direct AWS Amplify deployment
   - Use `deploy-amplify-cli.yml` for CLI-based deployment

## Build Configuration

Your app is already configured for production builds:

- **Build Command**: `npm run build`
- **Build Directory**: `dist`
- **Node Version**: 18.x

## Environment Variables

If you need environment variables in production:

1. In Amplify Console → App Settings → Environment variables
2. Add variables like:
   - `NODE_ENV`: `production`
   - Any API URLs or keys

## Custom Domain (Optional)

1. In Amplify Console → Domain Management
2. Add your custom domain
3. Follow DNS configuration steps

## Monitoring

- **Build logs**: Available in Amplify Console
- **Access logs**: CloudWatch Logs
- **Performance**: CloudWatch metrics

## Troubleshooting

### Common Issues:

1. **Build fails with npm error**
   - Check Node.js version compatibility
   - Verify package.json scripts

2. **Blank page after deployment**
   - Check browser console for errors
   - Verify build output in dist/ folder

3. **GitHub Actions fail**
   - Verify all secrets are set correctly
   - Check AWS permissions

### Debug Commands:
```bash
# Test local build
npm run build
npm run preview

# Check Amplify status
amplify status

# View logs
amplify console
```

## Next Steps

1. Choose your deployment method
2. Follow the setup steps above
3. Push your code to trigger deployment
4. Monitor the deployment in AWS Console

Your app will be available at:
- Default: `https://[branch].[app-id].amplifyapp.com`
- Custom domain: Your configured domain

## Security Notes

- Keep AWS credentials secure
- Use least-privilege IAM policies
- Enable AWS CloudTrail for auditing
- Consider using AWS Secrets Manager for sensitive data

---

## Quick Start (Recommended)

For the fastest deployment:

1. Push your code to GitHub
2. Go to AWS Amplify Console
3. Click "New app" → "Host web app" → GitHub
4. Select your repo and deploy!

The GitHub integration handles everything automatically.
