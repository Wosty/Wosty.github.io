// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: { unoptimized: true },
    sassOptions: {
        silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
    },
}

export default nextConfig