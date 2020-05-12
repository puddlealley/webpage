import * as React from 'react';
import { Post } from '../interfaces/post'
import Link from 'next/link'

type Props = {
    post: Post
}

const BlogListItem: React.FunctionComponent<Props> = ({ post }) => (
    <div className="flex-row container background pl-24 md:pr-24 py-10">
        <img className={"block"} src={`/images/${post.image}.png`} alt="article image"/>
        <Link href={`/blog/${post.id}`}>
            <p className="text-center font-bold">{ post.title }</p>
        </Link>

        <style jsx>{`
            section {
                background-color: #E7F9F9;
                color: #04335E;
                width: 100%;
            }
            .background {
                background-image: url(/images/${ post.image }.png);
                background-position: center right;
                background-repeat: no-repeat;
            }
            button {
                background-color: #FC993E;
                color: #103650;
            }
        `}
        </style>
    </div>
)

export default BlogListItem;