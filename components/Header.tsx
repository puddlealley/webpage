import { NextPage } from 'next';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';

const Header: NextPage = () => {
    return (
        <section className="flex md:pr-64">
            <Link href={"/"}>
                <img className="pl-3 md:pl-24" tabIndex={0} src="/images/PuddleAlley_Logo.png" alt="Puddle Alley logo"/>
            </Link>
            <div className="hidden md:block ml-auto pt-4">
                <Link href="/about"><a className="font-bold">About</a></Link>
                <Link href="/blog"><a className="font-bold ml-16">Blog</a></Link>
                <Link href="#contact"><a className="font-bold ml-16">Contact</a></Link>
            </div>

            <div className="md:hidden">
                <Menu right >
                    <a id="home" className="menu-item mb-10 font-bold text-3xl" href="/">Home</a>
                    <a id="about" className="menu-item mb-10 font-bold text-3xl" href="/about">About</a>
                    <a id="contact" className="menu-item font-bold text-3xl" href="/contact">Contact</a>
                </Menu>
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