import { NextPage } from 'next';

const BottomSection: NextPage<{}> = () => {
    return (
        <section>
            <div className={ `container background pr-24 md:pl-24 py-10` }>
                <h1 className= { `text-4xl mb-4 text-right` }>How we work</h1>
                <p className={`mb-4 w-1/3 text-right`}>We're a small operation with a small number of clients and projects. We hope to grow and have a large network of contractors and friends that we use to take on larger projects.</p>
                <button className="py-3 px-5 rounded-full">Work with us</button>
                <div className={"clearBoth"}></div>
            </div>

            <style jsx>{`
                section {
                    background-color: #03325D;
                    color: #F6FBF5;
                    width: 100%;
                }
                .background {
                    background-image: url(/images/puddle.png);
                    background-position: center left;
                    background-repeat: no-repeat;
                }
                p {
                    float: right;
                }
                button {
                    clear: both;
                    float: right;
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

export default BottomSection;