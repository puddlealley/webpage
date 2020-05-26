import Layout from '../../components/Layout'
import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import * as blogs from '../../blogs/blogs.json'
import { Post } from '../../interfaces/post'

type Props = {
    post: Post
}

// @ts-ignore
export default (blog: Props) => (
    <Layout>
        <section className="flex-row container background pl-24 md:pr-24 py-10">
            <h1 className="text-4xl mb-4 text-center font-bold">{ blog.post.title }</h1>
            <p>{ blog.post.content }</p>
        </section>
    </Layout>
)

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = blogs.posts.map((blog: Post) => {
        return {
            params: {
                id: blog.id
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = blogs.posts.find((post) => {
        if (!params) {
            return
        }
        return post.id === params.id as string
    })

    return {
        props: {
            post
        }
    }
}