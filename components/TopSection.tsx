import { NextPage } from 'next';
import React from 'react'
import Link from 'next/link'

const TopSection: NextPage<{}> = () => {
        return (
            <section className="background top-section">
                <h1 className="text-4xl mb-4 font-bold">Who we are</h1>
                <p className="mb-4 w-1/3">Puddle Alley is a software company that helps you build software faster. My name is <span className="font-bold">Rory Kelly</span> and I'm a Serial Tech founder with experience building social networks, games and mobile products. Puddle Alley is my newest project!</p>
                <Link href={"/about"}><button className="py-3 px-5 rounded-full font-bold">Read more</button></Link>
                <div className="clearBoth"></div>

                <style jsx>{`
                .background {
                    background-image: url(/images/gummy-app-development.png);
                    background-position: center right;
                    background-repeat: no-repeat;
                }
                p {
                    float: left;
                }
                button {
                    clear: both;
                    float: left;
                    background-color: #FC993E;
                    color: #103650;
                }
                .clearBoth {
                    clear:both;
                }
            `}
                </style>
            </section>
        );
    }

export default TopSection;