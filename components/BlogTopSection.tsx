import * as React from 'react';
import { Post } from '../interfaces/post'
import Link from 'next/link'

type Props = {
    post: Post
}

const BlogTopSection: React.FunctionComponent<Props> = ({ post}) => (
    <section className="flex-row background top-section md:pl-24 md:py-10">
        <h1 className="text-4xl mb-4 w-1/2 font-bold">{ post.title }</h1>
        <p className="mb-4 w-1/2">{ post.content }</p>
        <Link href={`/blog/${post.id}`}>
            <button className="py-3 px-5 rounded-full font-bold">Read more</button>
        </Link>

        <style jsx>{`
            .background {
                background-image: url(/images/notebook.png);
                background-position: center right;
                background-repeat: no-repeat;
            }
        `}
        </style>
    </section>
)

export default BlogTopSection;