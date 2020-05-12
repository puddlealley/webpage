import * as React from 'react';
import { Post } from '../interfaces/post'
import Link from 'next/link'
import BlogListItem from './BlogListItem'

type Props = {
    post: Post
    posts: Post[]
}

const BlogBottomSection: React.FunctionComponent<Props> = ({ posts }) => (
    <section className="flex-row container background pl-24 md:pr-24 py-10">
        <p className="text-4xl mb-4 w-1/2 font-bold">{ posts[0].title }</p>
        <p className="mb-4 w-1/2">{ posts[0].title }</p>
        <Link href={`/blog/${posts[0].id}`}>
            <button className="py-3 px-5 rounded-full font-bold">Read more</button>
        </Link>
        {posts.map((post, key) =>
            <BlogListItem post={post} />
        )}

        <style jsx>{`
            section {
                background-color: #E7F9F9;
                color: #04335E;
                width: 100%;
            }
            .background {
                background-image: url(/images/notebook.png);
                background-position: center right;
                background-repeat: no-repeat;
            }
            button {
                background-color: #FC993E;
                color: #103650;
            }
        `}
        </style>
    </section>
)

export default BlogBottomSection;