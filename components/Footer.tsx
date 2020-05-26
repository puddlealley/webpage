import React from 'react'
import { NextPage } from 'next';
import { FaAngleDoubleUp } from 'react-icons/fa'

const Footer: NextPage = () => {
    return (
        <section className="flex-row md:pl-32 py-6">
            <FaAngleDoubleUp className="inline" />
            <a onClick={() => scrollToTop()}>Back to top</a>
            <style jsx>{`
                section { 
                    background-color: #04335E;
                    color: #FC983D;
                }
                a {
                    color: white;
                    cursor: pointer;
                }
                .inline {
                    display: inline;
                }
            `}
            </style>
        </section>
    )
}

function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

export default Footer;