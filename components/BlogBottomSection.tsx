import * as React from 'react';
import { Post } from '../interfaces/post'
import Link from 'next/link'
import BlogListItem from './BlogListItem'

type Props = {
    posts: Post[]
}

const BlogBottomSection: React.FunctionComponent<Props> = ({ posts }) => (
    <section className="flex-row container pl-24 md:pr-20 py-10">
        {posts.map((post, key) =>
            <BlogListItem post={post} />
        )}

        <style jsx>{`
            section {
                color: #04335E;
                width: 100%;
            }
        `}
        </style>
    </section>
)

export default BlogBottomSection;