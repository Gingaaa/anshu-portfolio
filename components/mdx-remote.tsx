import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { JSX } from 'react'
import CopyButton from './copy-button'

const components = {
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
        <CopyButton {...props} />
    ),
}

export function CustomMDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
        />
    )
}