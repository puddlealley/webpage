import { NextPage } from 'next';

const Section: NextPage<{ title: string, position: string }> = ({ title, position }) => {
    const padding = (position === "right") ? "pr-20 md:pl-64 py-10" : "pl-20 md:pr-64 py-10"
    const color = (position === "right") ? "#03325D" : "#E7F9F9"
    const textColor = (position === "right") ? "#F6FBF5" : "#02385F"
    const textAlign = (position === "right") ? "text-right" : ""
    return (
        <section className={ padding }>
            <h1 className= { `text-4xl mb-4 ${ textAlign }` }>{ title }</h1>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis rutrum augue et laoreet. Proin pellentesque turpis quis purus ullamcorper, vel tempor felis gravida. Nullam et risus accumsan, vulputate urna at, vestibulum lectus. In hac habitasse platea dictumst. Vivamus eu pellentesque odio, non mollis tortor. Sed mollis nulla eu nulla efficitur semper. Donec eu mauris vulputate, eleifend mauris a, scelerisque odio. Sed quis mauris tincidunt, dignissim eros sed, molestie erat. Duis sollicitudin in nulla id cursus. </p>
            <button className="py-3 px-5 rounded-lg">Button text</button>
            <div className={"clearBoth"}></div>
            <style jsx>{`
                section {
                    background-color: ${color};
                    color: ${textColor};
                    width: 100%;
                }
                p {
                    float: ${position};
                    width: 70%;
                }
                button {
                    clear: both;
                    float: ${position};
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

export default Section;