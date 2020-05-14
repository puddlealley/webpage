import { NextPage } from 'next';
import React from 'react'

const AboutBottomSection: NextPage<{}> = () => {
    return (
        <section className="flex-row background bottom-section">
            <p className="mb-4 w-1/2 text-justify ml-auto">After a brief foray into full time employment (where I worked for <span className="font-bold">Mind Candy</span>, working closely with the founders or Play and Calm). I returned to Rockspin in 2014. Through Rockspin I worked as a consultant for some of the largest companies in the world while simultaneously launching my own products.</p>
            <p className="mb-4 w-1/2 text-justify ml-auto">As well as consulting for <span className="font-bold">usTwo</span>, <span className="font-bold">Sky</span>, <span className="font-bold">Zipcar</span> and <span className="font-bold">Cirrus Logic</span>, together with Valentin Hinov who joined Rockspin in 2016, I launched Bargain Bytes, a price comparision site for computer games and then a social network called Curated.</p>
            <p className="mb-4 w-1/2 text-justify ml-auto">As of 2020 I have founded <span className="font-bold">Puddle Alley</span> to work on my next big thing!</p>

            <style jsx>{`
                .background {
                    background-image: url(/images/coder.png);
                    background-position: center left;
                    background-repeat: no-repeat;
                }
            `}
            </style>
        </section>
    );
}

export default AboutBottomSection;