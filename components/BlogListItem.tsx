import * as React from 'react';
import { Post } from '../interfaces/post'
import Link from 'next/link'

type Props = {
    post: Post
}

const BlogListItem: React.FunctionComponent<Props> = ({ post }) => (
    <div id={post.id} className="w-1/3 inline-block p-4">
        <img className={"block mb-4"} src={`/images/${post.image}.png`} alt="article image"/>
        <Link href={`/blog/${post.id}`}>
            <p className="text-center font-bold">{ post.title }</p>
        </Link>

        <style jsx>{`
            
        `}
        </style>
    </div>
)

export default BlogListItem;