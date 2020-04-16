import { NextPage } from 'next';

const Header: NextPage = () => {
    return (
        <section className="">
            <h1>Puddle alley</h1>
            <style jsx>{`
                h1 {
                    color: blue;
                }
            `}
            </style>
        </section>
    )
}

export default Header;