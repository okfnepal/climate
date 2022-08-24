import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { getNamedRouteRegex } from 'next/dist/shared/lib/router/utils/route-regex'

import datamap from '../public/datamap.png'
import community from '../public/community.png'
import knowledge from '../public/knowledge.png'
import co2 from '../public/co2emission.png'
import coal from '../public/coal.png'
import fossil from '../public/fissiol.png'
import ghg from '../public/ghgemission.png'
import renewable from '../public/renewable.png'
import nature from '../public/nature.svg'

const Home: NextPage = () => {
  return (
    <Layout title='home'>
      <div className='max-w-7xl mx-auto px-8 mt-8 mb-32'>
        <div className='mt-40'>
          <h2 className='max-w-fit mx-auto text-xl text-slate-800 font-light mb-3'>
            Climate Knowledge Portal for climate actions and adaptions
          </h2>
          <h2 className='max-w-fit mx-auto text-3xl text-slate-800 font-bold'>
            Climate Knowledge Portal for Climate Actions and Adaptions
          </h2>
          <div className='max-w-fit mx-auto mt-8'>
            <Link href='/resource/data'>
              <button className='mx-auto w-36 border-indigo-200 border-2 bg-neutral-900 text-white mr-4 py-2 px-3 rounded-lg hover:bg-neutral-700'>
                Explore
              </button>
            </Link>
            <Link href='https://github.com/okfnepal/climate'>
              <button className='w-36 border-indigo-200 border-2 bg-white text-slate-800 py-2 px-3 rounded-lg hover:bg-neutral-100 hover:text-slate-500'>
                Get Involved
              </button>
            </Link>
          </div>
        </div>
        <div className='mt-10'>
        </div>
      </div>
    </Layout>
  )
}

export default Home
