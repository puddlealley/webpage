import { NextPage } from 'next';

const OurClients: NextPage<{}> = () => {
    return (
        <section className="flex-row white-section">
            <h1 className="text-4xl font-bold text-center">Our clients</h1>
            <p className="text-center">If you're curious about what we do, here are a few logos of some of the clients and projects I have worked on in the past.</p>
            <div className="flex my-10 justify-between">
                <img src="/images/ustwo.png" alt="UsTwo logo"/>
                <img src="/images/sky.png" alt="Sky logo"/>
                <img src="/images/cirruslogic.png" alt="Cirrus Logic logo"/>
                <img src="/images/zipcar.png" alt="Zipcar logo"/>
                <img src="/images/carv.png" alt="Carv logo"/>
            </div>
            <p className="text-center">I've helped companies develop and test next-gen digital signal processors and built software to help vehicle manufactures track Quality Assurance. I've also ran and maintained several social networks. (Popjam and Curated). </p>

            <style jsx>{`
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