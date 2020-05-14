import * as React from 'react';
import { Post } from '../interfaces/post'
import Link from 'next/link'
import BlogListItem from './BlogListItem'

type Props = {
    posts: Post[]
}

const BlogBottomSection: React.FunctionComponent<Props> = ({ posts }) => (
    <section className="flex-row white-section">
        {posts.map((post, key) =>
            <BlogListItem post={post} />
        )}
    </section>
)

export default BlogBottomSection;