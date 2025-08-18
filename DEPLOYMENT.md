# AWS Amplify Deployment Guide

This guide will help you deploy your Senior Engineer Profile app to AWS Amplify using GitHub Actions.

## Prerequisites

1. **AWS Account** with appropriate permissions
2. **GitHub Repository** for your code
3. **AWS Amplify App** created in AWS Console

## Deployment Options

### Option 1: Direct GitHub Integration (Recommended)
This is the simplest approach - connect your GitHub repo directly to Amplify.

#### Steps:
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Select "GitHub" as source
4. Authorize AWS Amplify to access your GitHub
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
