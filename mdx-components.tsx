import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{ color: 'blue', fontSize: '48px' }}>{children}</h1>
    ),
    ...components,
  }
}


// components/mdx-components.tsx
// import Image from 'next/image';
// import * as runtime from 'react/jsx-runtime';
// import React from 'react';
// import { LinkButton } from '@/components/ui/link-button';
// import CopyButton from './components/copy-button';

// const useMDXComponent = (code: string) => {
//   const fn = new Function(code);
//   return fn({ ...runtime }).default;
// };

// const components = {
//   Image,
//   LinkButton,
//   pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
//     <CopyButton {...props} />
//   ),
// };

// interface MdxProps {
//   code: string;
// }

// export function MDXContent({ code }: MdxProps) {
//   const Component = useMDXComponent(code);
//   return <Component components={components} />;
// }
