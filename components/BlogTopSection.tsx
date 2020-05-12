import * as React from 'react';
import { Post } from '../interfaces/post'
import Link from 'next/link'

type Props = {
    post: Post,
    posts: Post[]
}

const BlogTopSection: React.FunctionComponent<Props> = ({ post, posts }) => (
    <section className="flex-row container background pl-24 md:pr-24 py-10">
        <h1 className="text-4xl mb-4 w-1/2 font-bold">{ post.title }</h1>
        <p className="mb-4 w-1/2">{ post.content }</p>
        <Link href={`/blog/${post.id}`}>
            <button className="py-3 px-5 rounded-full font-bold">Read more</button>
        </Link>

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

export default BlogTopSection;