# ================================
# AWS S3 + CloudFront Deployment Script (PowerShell)
# For Carlos Tangarife Portfolio
# ================================

# Configuration
$BUCKET_NAME = "carlostangarife.com"
$DISTRIBUTION_ID = "YOUR_CLOUDFRONT_DISTRIBUTION_ID"  # Replace with your CloudFront ID
$REGION = "us-east-1"

Write-Host "================================" -ForegroundColor Green
Write-Host "Carlos Tangarife Portfolio" -ForegroundColor Green
Write-Host "AWS Deployment Script" -ForegroundColor Green
Write-Host "================================`n" -ForegroundColor Green

# Check if AWS CLI is installed
try {
    aws --version | Out-Null
} catch {
    Write-Host "❌ AWS CLI is not installed" -ForegroundColor Red
    Write-Host "Install it from: https://aws.amazon.com/cli/"
    exit 1
}

Write-Host "📦 Syncing files to S3..." -ForegroundColor Yellow

# Sync all files to S3
aws s3 sync . s3://$BUCKET_NAME `
    --region $REGION `
    --exclude ".git/*" `
    --exclude "docs/*" `
    --exclude "src/*" `
    --exclude "README.md" `
    --exclude "deploy.sh" `
    --exclude "deploy.ps1" `
    --exclude ".DS_Store" `
    --delete

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to sync files to S3" -ForegroundColor Red
    exit 1
}

Write-Host "🔧 Setting content types and cache headers..." -ForegroundColor Yellow

# HTML - No cache
aws s3 cp index.html s3://$BUCKET_NAME/ `
    --content-type "text/html; charset=utf-8" `
    --cache-control "public, max-age=0, must-revalidate" `
    --region $REGION

# CSS - Long cache
aws s3 cp styles.css s3://$BUCKET_NAME/ `
    --content-type "text/css; charset=utf-8" `
    --cache-control "public, max-age=31536000, immutable" `
    --region $REGION

# JavaScript - Long cache
aws s3 cp script.js s3://$BUCKET_NAME/ `
    --content-type "application/javascript; charset=utf-8" `
    --cache-control "public, max-age=31536000, immutable" `
    --region $REGION

# SVG Favicon
aws s3 cp favicon.svg s3://$BUCKET_NAME/ `
    --content-type "image/svg+xml" `
    --cache-control "public, max-age=31536000, immutable" `
    --region $REGION

# XML files
aws s3 cp sitemap.xml s3://$BUCKET_NAME/ `
    --content-type "application/xml; charset=utf-8" `
    --cache-control "public, max-age=86400" `
    --region $REGION

# Text files
aws s3 cp robots.txt s3://$BUCKET_NAME/ `
    --content-type "text/plain; charset=utf-8" `
    --cache-control "public, max-age=86400" `
    --region $REGION

Write-Host "✅ Files uploaded to S3 successfully`n" -ForegroundColor Green

# Invalidate CloudFront cache
if ($DISTRIBUTION_ID -ne "YOUR_CLOUDFRONT_DISTRIBUTION_ID") {
    Write-Host "🔄 Invalidating CloudFront cache..." -ForegroundColor Yellow
    
    $INVALIDATION_OUTPUT = aws cloudfront create-invalidation `
        --distribution-id $DISTRIBUTION_ID `
        --paths "/*" `
        --query 'Invalidation.Id' `
        --output text
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Cache invalidation created: $INVALIDATION_OUTPUT" -ForegroundColor Green
        Write-Host "⏳ Invalidation typically takes 30-60 seconds to complete" -ForegroundColor Yellow
    } else {
        Write-Host "❌ Failed to create cache invalidation" -ForegroundColor Red
    }
} else {
    Write-Host "⚠️  Skipping CloudFront invalidation (Distribution ID not set)" -ForegroundColor Yellow
    Write-Host "   Update `$DISTRIBUTION_ID in this script to enable" -ForegroundColor Yellow
}

Write-Host "`n================================" -ForegroundColor Green
Write-Host "🚀 Deployment Complete!" -ForegroundColor Green
Write-Host "================================`n" -ForegroundColor Green

Write-Host "Your site should be live at:"
Write-Host "https://carlostangarife.com`n" -ForegroundColor Green

Write-Host "Note: If you just updated content, wait 30-60 seconds for CloudFront"
Write-Host "      cache invalidation to complete, then hard refresh your browser.`n"

