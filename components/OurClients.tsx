import { NextPage } from 'next';
import React from 'react'

const OurClients: NextPage<{}> = () => {
    return (
        <section className="flex-row white-section md:pl-24 md:pr-20 md:py-10">
            <h1 className="pt-10 md:pt-0 text-4xl font-bold text-center">Our clients</h1>
            <p className="m-5 text-center">If you're curious about what we do, here are a few logos of some of the clients and projects I have worked on in the past.</p>
            <div className="md:flex m-5 md:justify-between">
                <img src="/images/zipcar.png" alt="Zipcar logo"/>
                <img src="/images/sky.png" alt="Sky logo"/>
                <img src="/images/ustwo.png" alt="UsTwo logo"/>
                <img src="/images/carv.png" alt="Carv logo"/>
                <img src="/images/cirruslogic.png" alt="Cirrus Logic logo"/>
            </div>
            <p className="m-5 text-center">I've helped companies develop and test next-gen digital signal processors and built software to help vehicle manufactures track Quality Assurance. I've also ran and maintained several social networks. (Popjam and Curated). </p>

            <style jsx>{`
                img {
                    height: auto;
                    max-width: 100%;
                    margin-right: 9px;
                    margin-bottom: 20px;
                    object-fit: scale-down;
                    position: relative;
                    width: auto;
                    display: inline;
                }
                
                @media (min-width: 640px) {
                      img {
                        display: block;
                        margin-right: 0;
                        margin-bottom: 0;
                    }
                }
            `}
            </style>
        </section>
    );
}

export default OurClients;