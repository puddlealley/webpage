import { NextPage } from 'next';
import React from 'react'
import Link from 'next/link'

const BottomSection: NextPage<{}> = () => {
    return (
        <section className="flex-row background bottom-section md:pr-40 md:pl-24 pb-10">
            <div className="md:hidden relative pb-2/3">
                <img className="absolute top-0 h-full w-full object-cover" src="/images/puddle.png" alt="People working"/>
            </div>
            <h1 className= "text-4xl py-4 text-center md:text-right">How we work</h1>
            <p className="mb-4 md:w-1/3 text-center md:text-right ml-auto text-justify">We're a small operation with a small number of clients and projects. We hope to grow and have a large network of contractors and friends that we use to take on larger projects.</p>
            <Link href={"/about"}>
                <button className="py-3 px-5 rounded-full font-bold mx-auto md:ml-auto md:mx-0 block">Work with us</button>
            </Link>

            <style jsx>{`
                .background {
                    background-image: none;
                }
                @media (min-width: 640px) {
                      .background {
                        background-image: url(/images/puddle.png);
                        background-position: center left;
                        background-repeat: no-repeat;
                    }
                }
            `}
            </style>
        </section>
    );
}

export default BottomSection;