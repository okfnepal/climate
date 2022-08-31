import type { NextPage } from 'next'
import Layout from '../../../components/Layout'
import ResourcesNav from '../../../components/ResourceNav'



const Contribute: NextPage = (props: any) => {
    return (
        <Layout title='readings'>
            <div className='max-w-7xl mx-auto px-8 mt-10'>
                <ResourcesNav />
                <div className='max-w-xl mx-auto mt-16'>
                    <h3 className='text-3xl my-4'>Resources Mapping</h3>
                    <p className='text-base mb-8'>
                        This section will map the data sources
                    </p>
                </div>
            </div>
        </Layout >
    )
}

export default Contribute
