import { NextPage } from 'next';
import React from 'react'

const TopSection: NextPage<{}> = () => {
        return (
            <section>
                <div className="container background pl-24 md:pr-24 py-10">
                    <h1 className="text-4xl mb-4 font-bold">Who we are</h1>
                    <p className="mb-4 w-1/3">Puddle Alley is a software company that helps you build software faster. My name is <span className="font-bold">Rory Kelly</span> and I'm a Serial Tech founder with experience building social networks, games and mobile products. Puddle Alley is my newest project!</p>
                    <button className="py-3 px-5 rounded-full">Read more</button>
                    <div className="clearBoth"></div>
                </div>

                <style jsx>{`
                section {
                    background-color: #E7F9F9;
                    color: #04335E;
                    width: 100%;
                }
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