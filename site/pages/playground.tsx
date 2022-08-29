import type { NextPage } from 'next'
import { useState } from 'react'
import Layout from '../components/Layout'


const Resources: NextPage = (props: any) => {

    return (
        <Layout title='Playground'>
            <div className='max-w-7xl mx-auto px-8 mt-20'>
                <div className='max-w-xl mx-auto'>
                    <h3 className='text-3xl my-4'>Climate Change, Mitigation and Adaption</h3>
                    <p className='text-base mb-8'>
                        {`Climate change is a global issue that affects everyone, and everyone's response is unique. We need to work together to address the impacts of climate change and to help build a better future.
                        A global response to climate change is a complex and interdependent system. This website is built to serve as a reference for climate change information on number of factors, including human, natural and economic impacts.`}
                    </p>
                    <h3 className='text-3xl'>Contents</h3>
                    <h2 className='text-base my-2'>Introduction to CLimate Change</h2>
                    <h2 className='text-base my-2'>Climate Change Vulnerability Nepal </h2>
                    <h2 className='text-base my-2'>Adaptation Policies Nepal</h2>
                    <h2 className='text-base my-2'>What Can we do?</h2>
                    <h2 className='text-base my-2'>Introduction to Climate Change</h2>
                    <h2 className='text-base my-2'>Introduction to Climate Change</h2>
                </div>
            </div>
        </Layout >
    )
}

export default Resources
