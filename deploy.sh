#!/bin/bash

# Senior Engineer Profile - Local Build Script
# This script builds the project for production
# No AWS CLI required - use GitHub Actions for deployment!

echo "🚀 Building Senior Engineer Profile for production..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

if [ $? -ne 0 ]; then
    echo "❌ Error: Failed to install dependencies."
    exit 1
fi

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error: Build failed."
    exit 1
fi

echo "✅ Build successful!"
echo "📁 Build output is in: ./dist/"
echo ""
echo "🌐 Deployment options:"
echo "1. Push to GitHub (main branch) for automatic deployment via GitHub Actions"
echo "2. Upload ./dist folder manually to AWS Amplify Console"
echo "3. Connect GitHub repo directly to AWS Amplify"
echo ""
echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions"

# Check if dist folder was created
if [ ! -d "dist" ]; then
    echo "❌ Error: Build output directory 'dist' not found."
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""
echo "📂 Build output is in the 'dist' folder"
echo "🌐 You can preview it locally with: npm run preview"
echo ""
echo "🚀 Ready for deployment!"
echo ""
echo "Deployment options:"
echo "1. GitHub → AWS Amplify (recommended)"
echo "   - Push to GitHub and connect via Amplify Console"
echo ""
echo "2. GitHub Actions Pipeline"
echo "   - Configure secrets and push to trigger deployment"
echo ""
echo "3. Manual upload"
echo "   - Upload the 'dist' folder contents to your hosting provider"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"
