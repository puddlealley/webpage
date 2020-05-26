import { NextPage } from 'next';
import Link from 'next/link';

const Header: NextPage = () => {
    return (
        <section className="flex md:pr-64">
            <Link href={"/"}>
                <img className={"pl-24"} src="/images/PuddleAlley_Logo.png" alt="Puddle Alley logo"/>
            </Link>
            <div className="ml-auto pt-4">
                <Link href="/about"><a className={"font-bold"}>About</a></Link>
                <Link href="/blog"><a className={"font-bold ml-16"}>Blog</a></Link>
                <Link href="#contact"><a className={"font-bold ml-16"}>Contact</a></Link>
            </div>

            <style jsx>{`
                a {
                    color: #04335E;
                }
                img {
                    cursor: pointer;
                }
            `}
            </style>
        </section>
    )
}

export default Header;