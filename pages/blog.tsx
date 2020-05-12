import Layout from '../components/Layout'
import React from 'react'
import AboutTopSection from '../components/AboutTopSection'
import AboutBottomSection from '../components/AboutBottomSection'
import { GetStaticProps, GetStaticPaths } from 'next'
import * as blogs from '../blogs/blogs.json'
import BlogTopSection from '../components/BlogTopSection'
import { Post } from '../interfaces/post'

// @ts-ignore
export default ({ post, posts }) => (
    <Layout>
        <BlogTopSection post={ post } posts={ posts } />
        {/*<AboutBottomSection />*/}
    </Layout>
)

// export const getStaticPaths: GetStaticPaths = async () => {
//     // ...
// }

export const getStaticProps: GetStaticProps = async context => {
    const post = blogs.posts.reduce((newest, post) => {
        return newest.date > post.date ? newest : post;
    });
    const posts = blogs.posts
    return {
        props: {
            post,
            posts
        }
    }
}