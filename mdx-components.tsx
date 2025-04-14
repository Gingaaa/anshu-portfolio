import type { MDXComponents } from 'mdx/types'
import CopyButton from './components/copy-button'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
      <CopyButton {...props} />
    ),
    ...components,
  }
}
