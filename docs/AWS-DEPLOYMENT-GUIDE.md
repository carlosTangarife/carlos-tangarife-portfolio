# AWS Deployment Guide
## S3 + CloudFront + Route 53

Complete guide for deploying your portfolio to AWS infrastructure.

---

## 🎯 Architecture Overview

```
Route 53 (DNS) 
    ↓
CloudFront (CDN + HTTPS)
    ↓
S3 Bucket (Static Hosting)
```

**Benefits:**
- ⚡ Ultra-fast global delivery via CloudFront CDN
- 🔒 Free SSL/TLS certificate
- 💰 Cost-effective (pennies per month)
- 🚀 Highly scalable
- 📊 Professional infrastructure

---

## 📋 Prerequisites

- AWS Account
- Domain registered (carlostangarife.com)
- AWS CLI installed (optional but recommended)
- Basic AWS knowledge

---

## 🚀 Step-by-Step Deployment

### STEP 1: Create S3 Bucket

1. **Go to S3 Console**
   - Navigate to: https://s3.console.aws.amazon.com/

2. **Create Bucket**
   - Click "Create bucket"
   - Bucket name: `carlostangarife.com` (must match domain)
   - Region: Choose closest to your audience (e.g., `us-east-1`)
   - **Uncheck** "Block all public access"
   - Acknowledge the warning
   - Click "Create bucket"

3. **Enable Static Website Hosting**
   - Select your bucket
   - Go to **Properties** tab
   - Scroll to "Static website hosting"
   - Click "Edit"
   - Enable: "Enable"
   - Index document: `index.html`
   - Error document: `index.html` (for SPA behavior)
   - Click "Save changes"
   - **Note the endpoint URL** (e.g., `carlostangarife.com.s3-website-us-east-1.amazonaws.com`)

4. **Set Bucket Policy**
   - Go to **Permissions** tab
   - Scroll to "Bucket policy"
   - Click "Edit"
   - Paste this policy (replace `carlostangarife.com` with your bucket name):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::carlostangarife.com/*"
        }
    ]
}
```

   - Click "Save changes"

---

### STEP 2: Upload Website Files

**Option A: Manual Upload (AWS Console)**

1. Go to bucket → **Objects** tab
2. Click "Upload"
3. Drag and drop these files:
   - index.html
   - styles.css
   - script.js
   - favicon.svg
   - robots.txt
   - sitemap.xml
4. Click "Upload"

**Option B: AWS CLI (Recommended)**

```bash
# Navigate to project folder
cd carlos-tangarife-portfolio

# Sync all files to S3
aws s3 sync . s3://carlostangarife.com --exclude ".git/*" --exclude "docs/*" --exclude "README.md"

# For future updates (faster)
aws s3 sync . s3://carlostangarife.com --exclude ".git/*" --exclude "docs/*" --exclude "README.md" --delete
```

**Set correct Content-Type for files:**
```bash
# CSS
aws s3 cp styles.css s3://carlostangarife.com/ --content-type "text/css"

# JavaScript
aws s3 cp script.js s3://carlostangarife.com/ --content-type "application/javascript"

# HTML
aws s3 cp index.html s3://carlostangarife.com/ --content-type "text/html"

# SVG
aws s3 cp favicon.svg s3://carlostangarife.com/ --content-type "image/svg+xml"
```

---

### STEP 3: Request SSL Certificate (ACM)

**IMPORTANT:** Certificate MUST be in `us-east-1` region for CloudFront!

1. **Go to Certificate Manager**
   - **Switch region to `us-east-1`** (top-right corner)
   - Navigate to: https://console.aws.amazon.com/acm/

2. **Request Certificate**
   - Click "Request a certificate"
   - Choose "Request a public certificate"
   - Click "Next"

3. **Add Domain Names**
   - Domain name 1: `carlostangarife.com`
   - Click "Add another name to this certificate"
   - Domain name 2: `*.carlostangarife.com` (for subdomains)
   - Click "Next"

4. **Select Validation Method**
   - Choose "DNS validation" (recommended)
   - Click "Next"
   - Add tags (optional)
   - Click "Request"

5. **Validate Certificate**
   - Click "View certificate"
   - Expand domain names
   - Click "Create records in Route 53" button
   - Confirm
   - **Wait 5-30 minutes** for validation to complete
   - Status will change to "Issued"

---

### STEP 4: Create CloudFront Distribution

1. **Go to CloudFront Console**
   - Navigate to: https://console.aws.amazon.com/cloudfront/

2. **Create Distribution**
   - Click "Create distribution"

3. **Configure Origin**
   - **Origin domain:** Select your S3 bucket from dropdown
     - It will auto-fill with: `carlostangarife.com.s3.us-east-1.amazonaws.com`
   - **Name:** Leave default
   - **Origin access:** "Origin access control settings (recommended)"
   - Click "Create control setting"
     - Leave defaults, click "Create"
   - **Enable Origin Shield:** No

4. **Configure Default Cache Behavior**
   - **Viewer protocol policy:** "Redirect HTTP to HTTPS"
   - **Allowed HTTP methods:** GET, HEAD
   - **Cache policy:** "CachingOptimized"
   - **Origin request policy:** None
   - **Response headers policy:** None

5. **Configure Settings**
   - **Price class:** Use all edge locations (best performance)
   - **Alternate domain names (CNAME):** Add:
     - `carlostangarife.com`
     - `www.carlostangarife.com`
   - **Custom SSL certificate:** Select the certificate you created
   - **Default root object:** `index.html`
   - **Description:** "Carlos Tangarife Portfolio"

6. **Create Distribution**
   - Click "Create distribution"
   - **Copy the Distribution ID** (e.g., `E1A2B3C4D5E6FG`)
   - **Note:** Takes 5-15 minutes to deploy globally

7. **Update S3 Bucket Policy for CloudFront**
   - After creation, you'll see a banner to "Copy policy"
   - Go back to S3 → Your bucket → Permissions → Bucket policy
   - Replace with the CloudFront policy
   - Example:

```json
{
    "Version": "2012-10-17",
    "Statement": {
        "Sid": "AllowCloudFrontServicePrincipalReadOnly",
        "Effect": "Allow",
        "Principal": {
            "Service": "cloudfront.amazonaws.com"
        },
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::carlostangarife.com/*",
        "Condition": {
            "StringEquals": {
                "AWS:SourceArn": "arn:aws:cloudfront::YOUR_ACCOUNT_ID:distribution/YOUR_DISTRIBUTION_ID"
            }
        }
    }
}
```

---

### STEP 5: Configure Route 53

**Option A: Domain Registered with Route 53**

1. **Go to Route 53**
   - Navigate to: https://console.aws.amazon.com/route53/

2. **Go to Hosted Zone**
   - Select `carlostangarife.com`

3. **Create Record for Root Domain**
   - Click "Create record"
   - **Record name:** Leave empty (for root domain)
   - **Record type:** A
   - **Alias:** Toggle ON
   - **Route traffic to:**
     - Choose "Alias to CloudFront distribution"
     - Select your distribution from dropdown
   - Click "Create records"

4. **Create Record for WWW**
   - Click "Create record"
   - **Record name:** `www`
   - **Record type:** A
   - **Alias:** Toggle ON
   - **Route traffic to:**
     - Choose "Alias to CloudFront distribution"
     - Select same distribution
   - Click "Create records"

**Option B: Domain Registered Elsewhere (GoDaddy, Namecheap, etc.)**

1. **Get CloudFront Distribution Domain**
   - In CloudFront console, copy your distribution domain
   - Format: `d1234abcd5ef6.cloudfront.net`

2. **Add Records to Your DNS Provider**

   For root domain (`carlostangarife.com`):
   ```
   Type: A or ALIAS (if supported)
   Name: @
   Value: d1234abcd5ef6.cloudfront.net
   TTL: 3600 (or default)
   ```

   For www subdomain:
   ```
   Type: CNAME
   Name: www
   Value: d1234abcd5ef6.cloudfront.net
   TTL: 3600
   ```

   **Note:** If your DNS provider doesn't support ALIAS for root domain:
   ```
   Type: CNAME
   Name: @
   Value: d1234abcd5ef6.cloudfront.net
   ```
   Or use CloudFlare as DNS (free, supports CNAME flattening)

---

### STEP 6: Test Your Deployment

1. **Wait for DNS Propagation** (5-30 minutes)

2. **Test URLs:**
   - https://carlostangarife.com
   - https://www.carlostangarife.com

3. **Verify:**
   - ✅ Site loads correctly
   - ✅ HTTPS works (padlock icon)
   - ✅ Redirects work (HTTP → HTTPS)
   - ✅ www redirects to non-www (or vice versa)
   - ✅ All CSS/JS loads correctly
   - ✅ No console errors

---

## 🔄 Updating Your Site

**After making changes:**

1. **Upload new files to S3:**
   ```bash
   aws s3 sync . s3://carlostangarife.com --exclude ".git/*" --exclude "docs/*" --delete
   ```

2. **Invalidate CloudFront cache:**
   ```bash
   aws cloudfront create-invalidation --distribution-id E1A2B3C4D5E6FG --paths "/*"
   ```

   Or via AWS Console:
   - CloudFront → Distributions → Select yours
   - Invalidations tab → Create invalidation
   - Object paths: `/*`
   - Submit

3. **Wait 30-60 seconds** for changes to propagate

---

## 💰 Cost Estimate

**Monthly costs for typical portfolio:**
- S3 Storage: $0.02 - $0.10
- S3 Requests: $0.01 - $0.05
- CloudFront Data Transfer: $0.50 - $2.00 (first 10TB free tier)
- Route 53 Hosted Zone: $0.50
- **Total: ~$1-3/month** 🎉

---

## 🔧 Optimization Tips

### Cache Headers

Add cache headers when uploading to S3:

```bash
# Cache CSS/JS for 1 year
aws s3 cp styles.css s3://carlostangarife.com/ \
  --content-type "text/css" \
  --cache-control "public, max-age=31536000, immutable"

aws s3 cp script.js s3://carlostangarife.com/ \
  --content-type "application/javascript" \
  --cache-control "public, max-age=31536000, immutable"

# Don't cache HTML
aws s3 cp index.html s3://carlostangarife.com/ \
  --content-type "text/html" \
  --cache-control "public, max-age=0, must-revalidate"
```

### Gzip Compression

Enable in CloudFront:
- Distribution settings → Behaviors → Edit
- Compress objects automatically: Yes

### Custom Error Pages

Create `404.html` and configure in CloudFront:
- Error pages → Create custom error response
- HTTP error code: 404
- Custom error response: Yes
- Response page path: `/404.html`
- HTTP response code: 404

---

## 🚨 Troubleshooting

### Site not loading
- Check CloudFront deployment status (takes 15 min)
- Verify DNS records propagation: https://dnschecker.org
- Check S3 bucket policy allows CloudFront

### CSS/JS not loading
- Check file Content-Type in S3
- Clear browser cache (Ctrl+Shift+R)
- Check browser console for errors

### Certificate errors
- Ensure certificate is in us-east-1 region
- Wait for "Issued" status in ACM
- Verify alternate domain names in CloudFront

### Changes not showing
- Invalidate CloudFront cache
- Wait 60 seconds
- Clear browser cache

---

## 📊 Monitoring

### CloudWatch Metrics
- CloudFront → Your distribution → Monitoring
- Track: Requests, Data Transfer, Error rates

### S3 Metrics
- S3 → Your bucket → Metrics
- Track: Storage, Requests

---

## 🔐 Security Best Practices

1. **Enable CloudFront Security Headers**
   - Use Response Headers Policy
   - Add: X-Frame-Options, X-Content-Type-Options, etc.

2. **Enable AWS WAF (Optional)**
   - Protect against DDoS, SQL injection, XSS
   - ~$5/month base + per-request fees

3. **Enable CloudFront Logging**
   - Track all requests
   - Store logs in separate S3 bucket

4. **Regular Backups**
   - Enable S3 versioning
   - Or keep local Git repository

---

## 🎯 Next Steps

- [ ] Set up Google Analytics
- [ ] Configure AWS WAF (optional)
- [ ] Add CloudFront access logs
- [ ] Set up automated deployments (GitHub Actions)
- [ ] Create CloudFormation template for IaC
- [ ] Monitor costs with AWS Budgets

---

**🚀 Your portfolio is now running on enterprise-grade AWS infrastructure!**

Built with the same tech stack used by Netflix, Airbnb, and millions of websites worldwide.

