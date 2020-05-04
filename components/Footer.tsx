import React from 'react'
import { NextPage } from 'next';
import Link from 'next/link';
import { FaAngleDoubleUp } from 'react-icons/fa'

const Footer: NextPage = () => {
    return (
        <section className="flex-row md:pl-64 py-6">
            <FaAngleDoubleUp className="inline" />
            <Link href={"/"}><a>Back to top</a></Link>
            <style jsx>{`
                section { 
                    background-color: #04335E;
                    color: #FC983D;
                }
                a {
                    color: white;
                }
                .inline {
                    display: inline;
                }
            `}
            </style>
        </section>
    )
}

export default Footer;