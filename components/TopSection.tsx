import { NextPage } from 'next';
import React from 'react'
import Link from 'next/link'

const TopSection: NextPage<{}> = () => {
        return (
            <section className="flex-row background top-section md:pl-24 md:py-10 pb-10">
                <div className="md:hidden relative pb-2/3">
                    <img className="absolute top-0 h-full w-full object-cover" src="/images/gummy-app-development.png" alt="App development"/>
                </div>
                <h1 className="text-4xl px-6 mb-4 font-bold text-center md:text-left">Who we are</h1>
                <p className="mb-4 px-6 md:w-1/3 text-center md:text-left">Puddle Alley is a software company that helps you build software faster. My name is <span className="font-bold">Rory Kelly</span> and I'm a Serial Tech founder with experience building social networks, games and mobile products. Puddle Alley is my newest project!</p>
                <Link href={"/about"}>
                    <button className="py-3 ml-auto px-5 rounded-full font-bold mx-auto md:mx-6 block">Read more</button>
                </Link>

                <style jsx>{`
                .background {
                    background-image: none;
                }
                @media (min-width: 640px) {
                      .background {
                        background-image: url(/images/gummy-app-development.png);
                        background-position: center right;
                        background-repeat: no-repeat;
                    }
                }
            `}
                </style>
            </section>
        );
    }

export default TopSection;