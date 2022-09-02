import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Link from 'next/link'


const Contribute: NextPage = (props: any) => {
    return (
        <Layout title='readings'>
            <div className='max-w-7xl mx-auto px-8 mt-20'>
                <div className='max-w-xl mx-auto'>
                    <h3 className='text-3xl my-4'>Contribute</h3>
                    <p className='text-base mb-2'>
                        This is an Open Source Collbrative project. You can contribute on research writing, researches, design and development add/suggest data resources.
                    </p>
                    <p>
                        {`Our long-term goal is to develop a comprehensive and interactive climate dashboard for Nepal, where we can track the impacts of climate change, use the data for forecasting & preparedness and also make climate and environment datasets open so they can be easily accessible to the global world.`}
                    </p>
                    <div className='mt-4 mb-40'>

                        <Link href='https://github.com/okfnepal/climatedata' passHref>
                            <a target='_blank' className='underline'>Contribute Data</a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Contribute
