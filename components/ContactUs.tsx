import { NextPage } from 'next';
import React from 'react'

const ContactUs: NextPage<{}> = () => {
    return (
        <section className="background pl-24 md:pr-24 py-10">
            <h1 className="text-4xl font-bold mb-8">Get in touch</h1>
            <div className="flex flex-col mb-16">
                <label htmlFor="name" className="block mb-2 font-bold">Your name</label>
                <input id="name" type="text" className="block w-2/5 mb-10 rounded text-2xl"/>
                <label htmlFor="message" className="block mb-2 font-bold">Message</label>
                <textarea name="message" id="message" className="block w-2/5 mb-10 h-64 rounded"></textarea>
                <button className="py-3 px-5 rounded-full w-1/6 font-bold">Send message</button>
            </div>

            <style jsx>{`
                section {
                    background-color: #E7F9F9;
                    color: #04335E;
                    width: 100%;
                }
                .background {
                    background-image: url(/images/street-puddle.png);
                    background-position: center right;
                    background-repeat: no-repeat;
                }
                button {
                    clear: both;
                    float: left;
                    background-color: #FC993E;
                    color: #103650;
                }
            `}
            </style>
        </section>
    );
}

export default ContactUs;