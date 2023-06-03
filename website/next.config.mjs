import nextMdx from '@next/mdx'
import mapbox from '@mapbox/rehype-prism'
import remarkGfm from "remark-gfm";

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkGfm,
    ],
    rehypePlugins: [mapbox]
  },
  experimental: {
    appDir: true,
  }
});

export default withMdx({
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
});
