import { NextPage } from 'next';
import React, { useState } from 'react'

const ContactUs: NextPage<{}> = () => {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: '' }
    })

    const [inputs, setInputs] = useState({
        name: '',
        message: ''
    })

    const handleResponse = (status: number, msg: string) => {
        if (status === 200) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg }
            })
            setInputs({
                name: '',
                message: ''
            })
        } else {
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: msg }
            })
        }
    }

    const handleOnChange = (e: any) => {
        e.persist()
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: '' }
        })
    }

    const handleOnSubmit = async (e: any) => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        })
        const text = await res.text()
        handleResponse(res.status, text)
    }
    return (
        <section id="contact" className="background top-section md:pl-24 md:pr-24 md:py-10">
            <div className="md:hidden relative pb-2/3">
                <img className="absolute top-0 h-full w-full object-cover" src="/images/street-puddle.png" alt="Puddle reflect street above"/>
            </div>
            <h1 className="text-4xl px-6 mb-4 font-bold text-center md:text-left">Get in touch</h1>
            <form onSubmit={handleOnSubmit} className="flex-col px-6 pb-16">
                <label htmlFor="name" className="block mb-2 font-bold">Your name</label>
                <input id="name" type="text" required onChange={handleOnChange} value={inputs.name} className="block w-full md:w-2/5 mb-10 rounded text-2xl"/>
                <label htmlFor="message" className="block mb-2 font-bold">Message</label>
                <textarea name="message" id="message" required onChange={handleOnChange} value={inputs.message} className="block w-full md:w-2/5 mb-10 h-64 rounded"></textarea>
                <button type="submit" disabled={status.submitting} className="py-3 px-5 rounded-full mx-auto md:mx-0 font-bold">
                    {!status.submitting
                        ? !status.submitted
                            ? 'Send message'
                            : 'Submitted'
                        : 'Submitting...'}
                </button>
            </form>
            {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
                <div className="success">{status.info.msg}</div>
            )}

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