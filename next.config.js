/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_SECRET:"Cronus-pro",
    NEXTAUTH_URL:"https://cronuspro.in/",
    next:{
      api_url:"https://cronuspro.in/api/v1/"
    },

    server : {
		path:"https://back.cronuspro.in/",
   		api:"https://back.cronuspro.in/api/",
      	jwt_secret:"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"
    }
  },
  reactStrictMode: false,
  experimental: {
      scrollRestoration: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['back.cronuspro.in','cdn11.bigcommerce.com'],
  }
}

module.exports = nextConfig