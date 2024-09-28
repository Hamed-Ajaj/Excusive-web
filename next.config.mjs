/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'cdn.dummyjson.com',
        }],
    },
    async headers() {
        return [
        {
            source: '/(.*)',
            headers: [
            {
                key: 'X-Frame-Options',
                value: 'DENY',
            },
            ],
        },
        ];
    },
};

export default nextConfig;
