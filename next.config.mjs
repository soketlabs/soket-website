import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: process.env.NODE_ENV == 'production' ? "": "",
    images: {
        unoptimized: true,
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: []
    },
  })

export default withMDX(nextConfig)
