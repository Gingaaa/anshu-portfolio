import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{ color: 'blue', fontSize: '48px' }}>{children}</h1>
    ),
    ...components,
  }
}