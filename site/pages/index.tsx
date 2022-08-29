import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import { Octokit } from 'octokit'
import Image from 'next/image'
import { getJournalsPathsByCategory } from '../lib/github_rest'
import oneworld from '../public/transparent.png'


const octokit = new Octokit({ auth: `${process.env.NEXT_PUBLIC_PAT}` })



export async function getStaticProps({ params }: any) {
  async function getFetchPaths() {
    const categories_name: any = []
    const response = await octokit.request(`GET /repos/okfnepal/climatedata/contents/Datasets`)
    response.data.map((item: any) => {
      console.log(item.type)
      if (item.type === 'dir') {
        categories_name.push(octokit.request(`GET /repos/okfnepal/climatedata/contents/Datasets/${item.name}?ref=master`))
      }
    })
    return categories_name
  }

  const datasetPaths = await getFetchPaths()

  const paths = await Promise.all(datasetPaths).then((response) => {
    const staticPaths: any = []
    response.map((item: any) => {
      item.data.map((items: any) => {
        staticPaths.push({ params: { dataset: `${items.name}`, category: items.path.split('/')[1], data: items } })
      })
    })
    return staticPaths
  }).then((data: any) => data)

  const journals = await getJournalsPathsByCategory()

  return {
    props: {
      data: paths,
      journals: journals.data
    },
  }
}

const Home: NextPage = (props: any) => {
  console.log(props.data)
  console.log('journals', props.journals)
  return (
    <Layout title='Homepage'>
      <div className='mt-28 max-w-7xl mx-auto px-8 mt-8 mb-32 text-slate-800'>

        <div className='grid grid-cols-6 max-h-max'>
          <div className='mt-16 col-span-4 '>
            {/* <h2 className='max-w-fit mx-auto text-xl text-slate-800 font-light mb-3'>
              Climate Knowledge Portal for Climate Actions and Adaptions
            </h2> */}
            <h2 className='max-w-fit mx-auto text-4xl text-slate-800 font-bold'>
              Explore, Find, Suggest the Climate Datasets, Reports, Articles relating to Nepal
            </h2>
            <p className='my-2'>
              Climate Knowledge Nepal is the portal for data/resources and knowledge on Climate Change Nepal. It can be used by begineers or experts on Climate Change to access or share resources and knowledge.
            </p>
            <div className='max-w-fit  mt-8'>
              <Link href='/resource/data'>
                <button className='mx-auto w-36 border-slate-600 border-2 bg-gray-900 hover:bg-slate-400 font-medium  mr-4 py-2 px-3 text-white hover:text-black'>
                  Explore
                </button>
              </Link>
              {/* <Link href='https://github.com/okfnepal/climate'>
                <button className='w-36 border-slate-600 border-2 bg-white text-slate-800 font-medium py-2 px-3 hover:bg-gray-300 hover:text-slate-500'>
                  Get Involved
                </button>
              </Link> */}
            </div>
          </div>
          <div className='max-h-max h-96 w-96'>
            <Image src={oneworld} height={1000} width={1000} alt='earthimage'></Image>
          </div>
        </div>
        <div className='mt-16'>
          <h2 className='text-2xl font-semibold my-8'>Climate Datasets</h2>
          <div className='grid grid-cols-3 gap-8'>
            {props.data.map((item: any, key: any) => {
              return (
                <div className='border-2 border-slate-600 bg-white p-4 px-6 w-11/12 h-full' key={key}>
                  <h3 className='text-lg font-semibold pb-2'>{item.params.dataset.split('-').join(' ')}</h3>
                  <p className='p-0.5 max-w-fit text-xs font-light bg-gray-300 mb-6'>{item.params.category}</p>
                  <div className='mb-4'>
                    <Link href={`${item.params.data.html_url}`} passHref>
                      <a target='_blank' className='text-base border-slate-700 border-2 p-1 px-3 mr-4 mb-8 bg-slate-800 text-white font-medium hover:text-black hover:bg-slate-400'>Explore</a>
                    </Link>
                    <Link href={`/resource/data/${item.params.category}/${item.params.dataset}`} passHref>
                      <a target='_blank' className='text-base border-2 border-slate-700 p-1 px-3 mr-4 font-medium hover:bg-gray-300 hover:text-slate-500'>Github</a>
                    </Link>
                  </div>
                </div>

              )
            })}
          </div>
          <div className='mx-auto w-fit my-10'>
            <Link href={``} passHref>
              <a target='_blank' className='mx-auto text-base border-2 border-slate-700 p-1 px-3 mr-4 font-medium hover:bg-gray-300 hover:text-slate-500'>Explore All Datasets</a>
            </Link>
          </div>
        </div>

        <div className='mt-16'>
          <h2 className='text-2xl font-semibold my-8'>Reports and Researches</h2>
          <div className='grid grid-cols-3 gap-8'>
            {props.journals.slice(0, 3).map((item: any, key: any) => {

              return (
                <div className='border-2 border-slate-600 bg-gray-200 p-4 px-6 w-11/12 h-full' key={key}>
                  <Link href={`/resource/journals/${item.params.category}`} passHref>
                    <a className='text-lg font-semibold pb-2'>{item.params.category.split('_').join(' ')}</a>
                  </Link>
                  {/* <p className='p-0.5 max-w-fit text-xs font-light bg-gray-300 mb-6'>{item.params.category}</p> */}
                  <div className='mb-2 mt-2'>
                    <Link href={`${item.params.data.data.html_url}`} passHref>
                      <a target='_blank' className='text-base border-slate-700 border-2 p-1 px-3 mr-4 mb-8 bg-slate-800 text-white font-medium hover:text-black hover:bg-slate-400'>Explore</a>
                    </Link>
                    <Link href={`/resource/journals/${item.params.category}`} passHref>
                      <a className='text-base border-2 border-slate-700 p-1 px-3 mr-4 font-medium bg-white hover:bg-gray-300 hover:text-slate-500'>Github</a>
                    </Link>
                  </div>
                  <p className='text-xs font-light'>Modified :{item.params.data.headers['last-modified'].split(' ').slice(1, 4).join(' ')}</p>
                </div>

              )
            })}
          </div>
          <div className='mx-auto w-fit my-10'>
            <Link href={``} passHref>
              <a target='_blank' className='mx-auto text-base border-2 border-slate-700 p-1 px-3 mr-4 font-medium hover:bg-gray-300 hover:text-slate-500'>Explore All Journals</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
