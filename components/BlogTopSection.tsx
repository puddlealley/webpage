import * as React from 'react';
import { Post } from '../interfaces/post'
import Link from 'next/link'

type Props = {
    post: Post
}

const BlogTopSection: React.FunctionComponent<Props> = ({ post}) => (
    <section className="flex-row background top-section md:pl-24 md:py-10 pb-10">
        <div className="md:hidden relative pb-2/3">
            <img className="absolute top-0 h-full w-full object-cover" src="/images/notebook.png" alt="Notebook"/>
        </div>
        <h1 className="text-4xl md:w-1/2 p-6 mb-4 font-bold text-center md:text-left">{ post.title }</h1>
        <p className="mb-4 px-6 md:w-1/2 text-center md:text-left text-justify">{ post.content }</p>
        <Link href={`/blog/${post.id}`}>
            <button className="py-3 ml-auto px-5 rounded-full font-bold mx-auto md:mx-6 block">Read more</button>
        </Link>

        <style jsx>{`
            .background {
                background-image: none;
            }
            @media (min-width: 640px) {
                  .background {
                    background-image: url(/images/notebook.png);
                    background-position: center right;
                    background-repeat: no-repeat;
                }
            }
        `}
        </style>
    </section>
)

export default BlogTopSection;