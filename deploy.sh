#!/bin/bash

# ================================
# AWS S3 + CloudFront Deployment Script
# For Carlos Tangarife Portfolio
# ================================

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
BUCKET_NAME="carlostangarife.com"
DISTRIBUTION_ID="YOUR_CLOUDFRONT_DISTRIBUTION_ID"  # Replace with your CloudFront ID
REGION="us-east-1"

echo -e "${GREEN}================================${NC}"
echo -e "${GREEN}Carlos Tangarife Portfolio${NC}"
echo -e "${GREEN}AWS Deployment Script${NC}"
echo -e "${GREEN}================================${NC}\n"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI is not installed${NC}"
    echo "Install it from: https://aws.amazon.com/cli/"
    exit 1
fi

echo -e "${YELLOW}📦 Syncing files to S3...${NC}"

# Sync all files to S3 with correct content types
aws s3 sync . s3://${BUCKET_NAME} \
    --region ${REGION} \
    --exclude ".git/*" \
    --exclude "docs/*" \
    --exclude "src/*" \
    --exclude "README.md" \
    --exclude "deploy.sh" \
    --exclude "deploy.ps1" \
    --exclude ".DS_Store" \
    --delete

# Set specific content types and cache headers
echo -e "${YELLOW}🔧 Setting content types and cache headers...${NC}"

# HTML - No cache
aws s3 cp index.html s3://${BUCKET_NAME}/ \
    --content-type "text/html; charset=utf-8" \
    --cache-control "public, max-age=0, must-revalidate" \
    --region ${REGION}

# CSS - Long cache
aws s3 cp styles.css s3://${BUCKET_NAME}/ \
    --content-type "text/css; charset=utf-8" \
    --cache-control "public, max-age=31536000, immutable" \
    --region ${REGION}

# JavaScript - Long cache
aws s3 cp script.js s3://${BUCKET_NAME}/ \
    --content-type "application/javascript; charset=utf-8" \
    --cache-control "public, max-age=31536000, immutable" \
    --region ${REGION}

# SVG Favicon
aws s3 cp favicon.svg s3://${BUCKET_NAME}/ \
    --content-type "image/svg+xml" \
    --cache-control "public, max-age=31536000, immutable" \
    --region ${REGION}

# XML files
aws s3 cp sitemap.xml s3://${BUCKET_NAME}/ \
    --content-type "application/xml; charset=utf-8" \
    --cache-control "public, max-age=86400" \
    --region ${REGION}

# Text files
aws s3 cp robots.txt s3://${BUCKET_NAME}/ \
    --content-type "text/plain; charset=utf-8" \
    --cache-control "public, max-age=86400" \
    --region ${REGION}

echo -e "${GREEN}✅ Files uploaded to S3 successfully${NC}\n"

# Invalidate CloudFront cache
if [ "$DISTRIBUTION_ID" != "YOUR_CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo -e "${YELLOW}🔄 Invalidating CloudFront cache...${NC}"
    
    INVALIDATION_OUTPUT=$(aws cloudfront create-invalidation \
        --distribution-id ${DISTRIBUTION_ID} \
        --paths "/*" \
        --query 'Invalidation.Id' \
        --output text)
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Cache invalidation created: ${INVALIDATION_OUTPUT}${NC}"
        echo -e "${YELLOW}⏳ Invalidation typically takes 30-60 seconds to complete${NC}"
    else
        echo -e "${RED}❌ Failed to create cache invalidation${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Skipping CloudFront invalidation (Distribution ID not set)${NC}"
    echo -e "${YELLOW}   Update DISTRIBUTION_ID in this script to enable${NC}"
fi

echo ""
echo -e "${GREEN}================================${NC}"
echo -e "${GREEN}🚀 Deployment Complete!${NC}"
echo -e "${GREEN}================================${NC}"
echo ""
echo -e "Your site should be live at:"
echo -e "${GREEN}https://carlostangarife.com${NC}"
echo ""
echo -e "Note: If you just updated content, wait 30-60 seconds for CloudFront"
echo -e "      cache invalidation to complete, then hard refresh your browser."
echo ""

