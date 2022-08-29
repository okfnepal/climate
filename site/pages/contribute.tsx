import type { NextPage } from 'next'
import Layout from '../components/Layout'


const Contribute: NextPage = (props: any) => {
    return (
        <Layout title='readings'>
            <div className='max-w-7xl mx-auto px-8 mt-20'>
                <div className='max-w-xl mx-auto'>
                    <h3 className='text-3xl my-4'>Contribute</h3>
                    <p className='text-base mb-8'>
                        This is an Open Source Collbrative project. You can contribute to the project in following ways.
                    </p>
                    <h2 className='text-base my-2'>Content Writing and Research</h2>
                    <h2 className='text-base my-2'>Enhance Design and Development</h2>
                    <h2 className='text-base my-2'>Add, Map Data sources </h2>
                </div>
            </div>
        </Layout >
    )
}

export default Contribute
