import Layout from '../components/Layout'
import Section from '../components/Section'
import Header from '../components/Header'

// @ts-ignore
export default () => (
    <Layout>
        <Header />
        <Section title={"Hello top"} position={"left"} />
        <Section title={"Hello bottom"} position={"right"} />
        {/*<div className="container flex flex-col items-center  ">*/}
        {/*    <h1 className="flex-auto  text-6xl  text-center" style={{fontFamily: "introrustg-base2line"}}>Puddle Alley2</h1>*/}
        {/*    <img src="/splash.svg" className="w-64 mt-4"/>*/}
        {/*</div>*/}
    </Layout>
)