import { NextPage } from 'next';
import * as React from 'react';
import Link from 'next/link'

const BottomSection: NextPage<{}> = () => {
    return (
        <section className="flex-row background bottom-section">
            <h1 className= "text-4xl mb-4 text-right">How we work</h1>
            <p className="mb-4 w-1/3 text-right ml-auto">We're a small operation with a small number of clients and projects. We hope to grow and have a large network of contractors and friends that we use to take on larger projects.</p>
            <Link href={"/about"}>
                <button className="py-3 px-5 rounded-full font-bold ml-auto block">Work with us</button>
            </Link>

            <style jsx>{`
                .background {
                    background-image: url(/images/puddle.png);
                    background-position: center left;
                    background-repeat: no-repeat;
                }
            `}
            </style>
        </section>
    );
}

export default BottomSection;