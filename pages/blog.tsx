import Layout from '../components/Layout'
import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import * as blogs from '../blogs/blogs.json'
import BlogTopSection from '../components/BlogTopSection'
import BlogBottomSection from '../components/BlogBottomSection'

// @ts-ignore
export default ({ post, posts }) => (
    <Layout>
        <BlogTopSection post={ post } />
        <BlogBottomSection posts={posts} />
    </Layout>
)

export const getStaticProps: GetStaticProps = async context => {
    const post = blogs.posts.reduce((newest, post) => {
        return newest.date > post.date ? newest : post;
    });
    const posts = blogs.posts.filter(item => post.id !== item.id)
    return {
        props: {
            post,
            posts
        }
    }
}