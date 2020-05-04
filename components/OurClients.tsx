import { NextPage } from 'next';

const OurClients: NextPage<{}> = () => {
    return (
        <section>
            <div className="flex-row pl-24 md:pr-24 py-10">
                <h1 className="text-4xl font-bold text-center">Our clients</h1>
                <p className="text-center">If you're curious about what we do, here are a few logos of some of the clients and projects I have worked on in the past.</p>
                <div className="flex my-10 justify-center">
                    <img className="mr-10" src="/images/ustwo.png" alt="UsTwo logo"/>
                    <img className="mr-10" src="/images/sky.png" alt="Sky logo"/>
                    <img className="mr-10" src="/images/cirruslogic.png" alt="Cirrus Logic logo"/>
                    <img className="mr-10" src="/images/zipcar.png" alt="Zipcar logo"/>
                    <img src="/images/carv.png" alt="Carv logo"/>
                </div>
                <p className="text-center">I've helped companies develop and test next-gen digital signal processors and built software to help vehicle manufactures track Quality Assurance. I've also ran and maintained several social networks. (Popjam and Curated). </p>
            </div>

            <style jsx>{`
                section {
                    color: #04335E;
                    width: 100%;
                }
                img {
                    height: auto;
                    max-width: 100%;
                    object-fit: scale-down;
                    position: relative;
                    width: auto;
                }
            `}
            </style>
        </section>
    );
}

export default OurClients;