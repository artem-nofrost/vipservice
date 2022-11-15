/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/avia',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
