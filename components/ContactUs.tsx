import { NextPage } from 'next';
import React from 'react'

const ContactUs: NextPage<{}> = () => {
    return (
        <section id="contact" className="background top-section md:pl-24 md:pr-24 py-10">
            <div className="md:hidden relative pb-2/3">
                <img className="absolute top-0 h-full w-full object-cover" src="/images/street-puddle.png" alt="Puddle reflect street above"/>
            </div>
            <h1 className="text-4xl px-6 mb-4 font-bold text-center md:text-left">Get in touch</h1>
            <div className="flex-col px-6 mb-16">
                <label htmlFor="name" className="block mb-2 font-bold">Your name</label>
                <input id="name" type="text" className="block w-full md:w-2/5 mb-10 rounded text-2xl"/>
                <label htmlFor="message" className="block mb-2 font-bold">Message</label>
                <textarea name="message" id="message" className="block w-full md:w-2/5 mb-10 h-64 rounded"></textarea>
                <button className="py-3 px-5 rounded-full mx-auto md:mx-0 font-bold">Send message</button>
            </div>

            <style jsx>{`
                .background {
                    background-image: none;
                }
                @media (min-width: 640px) {
                      .background {
                        background-image: url(/images/street-puddle.png);
                        background-position: center right;
                        background-repeat: no-repeat;
                    }
                }
            `}
            </style>
        </section>
    );
}

export default ContactUs;