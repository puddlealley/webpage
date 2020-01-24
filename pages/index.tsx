import Layout from '../components/Layout'

// @ts-ignore
export default () => (
    <Layout>
        <div className="container flex flex-col items-center  ">
            <h1 className="flex-auto  text-6xl  text-center" style={{fontFamily: "introrustg-base2line"}}>Puddle Alley</h1>
            <img src="/splash.svg" className="w-64 mt-4"/>
        </div>
    </Layout>
)