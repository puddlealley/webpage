import { NextPage } from 'next';
import Link from 'next/link';

const Header: NextPage = () => {
    return (
        <section className="flex md:pr-64">
            <img className={"pl-24"} src="/images/PuddleAlley_Logo.png" alt="Puddle Alley logo"/>
            <div className="c pt-4">
                <Link href="/about"><a className={"font-bold"}>About</a></Link>
                <Link href="/blog"><a className={"font-bold ml-16"}>Blog</a></Link>
                <Link href="/contact"><a className={"font-bold ml-16"}>Contact</a></Link>
            </div>

            <style jsx>{`
                .clearBoth {
                    clear:both;
                }
                .c {
                    margin-left: auto;
                }
                a {
                    color: #04335E;
                }
            `}
            </style>
        </section>
    )
}

export default Header;