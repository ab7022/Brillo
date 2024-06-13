/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      JWT_SECRET: 'Abdul',
    },
    images: {
      domains: [
        "images.unsplash.com",
        "res.cloudinary.com",
        "pbs.twimg.com",
        "upload.wikimedia.org",
        "raw.githubusercontent.com",
        "saurav-main-portfolio.netlify.app",
        "static.vecteezy.com",
        "static.semrush.com",
        "pub-96c5670691c8435283fb5dea0d94a7e8.r2.dev",
        'brillo-data.s3.ap-south-1.amazonaws.com'
      ],
    },
  };
  
  export default nextConfig;
  