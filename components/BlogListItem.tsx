import * as React from 'react';
import { Post } from '../interfaces/post'
import Link from 'next/link'

type Props = {
    post: Post
}

const BlogListItem: React.FunctionComponent<Props> = ({ post }) => (
    <div id={post.id} className="md:w-1/3 inline-block md:px-24 md:py-10 pb-10">
        <img className={"block mb-4"} src={`/images/${post.image}.png`} alt="article image"/>
        <Link href={`/blog/${post.id}`}>
            <div className="text-center">
                <a id={`link-${post.id}`} className="font-bold">{ post.title }</a>
            </div>
        </Link>
    </div>
)

export default BlogListItem;