import { NextPage } from 'next';
import React from 'react'

const AboutTopSection: NextPage<{}> = () => {
    return (
        <section className="flex-row background top-section md:pl-24 md:py-10">
            <h1 className="text-4xl mb-4 font-bold">About me</h1>
            <p className="mb-4 w-1/2 text-justify">My name is <span className="font-bold">Rory Kelly</span> and I'm a Serial Tech founder with experience building social networks, games and mobile projects.</p>
            <p className="mb-4 w-1/2 text-justify">I built my first company, <span className="font-bold">Rockspin</span>, in 2011 while studying masters degree in Computer Games Technology. I paid for my masters degree by building apps and games for champion motorcycle riders and accountancy firms. As a consultant I helped Scottish develop and scale their mobile capabilities. I hired and trained staff while working on government marketing campaigns, airline apps, transport and even built apps for a few bands. I worked with what are now some of the most innovative companies in the UK, from <span className="font-bold">Waracle</span> to the BAFTA award winning <span className="font-bold">Spilt Milk Studios.</span></p>

            <style jsx>{`
                .background {
                    background-image: url(/images/rory.png);
                    background-position: center right;
                    background-repeat: no-repeat;
                }
            `}
            </style>
        </section>
    );
}

export default AboutTopSection;