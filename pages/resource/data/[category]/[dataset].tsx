import type { NextPage } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { Octokit } from '@octokit/core'
import { useRouter } from 'next/router'
import Breadcrumbs from 'nextjs-breadcrumbs'
import Layout from '../../../../components/Layout'
import { fileURLToPath } from 'url'

const octokit = new Octokit({ auth: `${process.env.NEXT_PUBLIC_PAT}` })

export async function getStaticPaths() {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export async function getStaticProps({ params }: any) {
    const res = await octokit.request(`GET /repos/okfnepal/climatedata/contents/Datasets/${params.category}/${params.dataset.split(' ').join('%20')}?ref=master`)
    return {
        props: {
            // data: res,
            data: res,
            query: params
        },
    }
}

const Res: NextPage = (props: any) => {
    const router = useRouter()
    const [data, setData] = useState(props.data.data)
    const re = /(?:\.([^.]+))?$/
    const dataLen = data.length
    const datal = Number(dataLen / 10)
    const pageArr = []
    const [pageNum, setPageNum] = useState(0)
    for (let i = 0; i < Number(datal.toFixed()); i++) {
        pageArr.push(data.slice(i * 10, (i + 1) * 10))
    }
    return (
        <Layout title='Resources'>
            <div className='max-w-7xl mx-auto px-8 my-10'>
                {/* <h2 className='text-gray-800 text-base text-blue-500 font-bold'>Explore Data and Resources for different Climate Topics</h2> */}
                <div className='flex justify-between mb-8 mt-16 border-b-2 pb-2'>
                    <div className='flex space-x-8 self-end max-w-2xl '>
                        <h2 className={`font-medium ${router.pathname.split('/')[2] === 'data' ? "text-blue-400" : ""}`}>
                            <Link href='/resource/data'>Data</Link>
                        </h2>
                        <h2 className={`font-medium ${router.pathname.split('/')[2] === 'journals' ? "text-blue-400" : ""}`}>
                            <Link href='/resource/data'>Resource</Link>
                        </h2>
                        <h2 className={`font-medium ${router.pathname.split('/')[2] === 'articles' ? "text-blue-400" : ""}`}>
                            <Link href='/resource/data'>Articles</Link>
                        </h2>
                        <h2 className={`font-medium ${router.pathname.split('/')[2] === 'licensing' ? "text-blue-400" : ""}`}>
                            <Link href='/resource/data'>Licensing Info</Link>
                        </h2>
                    </div>
                    <button className=' border-indigo-200 border-2 text-sm text-slate-800 py-1 px-3 rounded-lg hover:bg-neutral-700 hover:text-slate-500 self-start'>+ Suggest Resource</button>
                </div>

                <div className='w-full'>
                    <Breadcrumbs
                        containerStyle={{ display: 'flex', justifyContent: 'space-between' }}
                        listStyle={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', listStyle: 'none', padding: '0' }}
                        inactiveItemStyle={{ color: '#282a35', cursor: 'default', marginRight: '8px' }}
                        activeItemStyle={{ color: '#282a35', textDecoration: 'underline' }}
                        transformLabel={(label: any) => {
                            if (router.asPath.split('/').slice(-1).some(item => item === label)) {
                                return label.split("%20").join(' ')
                            } else {
                                return label + ' >'
                            }
                        }}
                        replaceCharacterList={[{ from: '%20', to: '&gt;' }]}
                        rootLabel="Home"
                    />
                    <div className='mt-16  max-w-3xl mx-auto'>
                        <h3 className='py-2 mb-4 text-3xl'>{props.query.dataset}</h3>
                        <div className=''>
                            <div className='grid grid-cols-4'>
                                <div className='col-span-3 my-2 text-lg'>Data Files </div>
                                {data.map((item: any, key: any) => {
                                    return (
                                        <div className={`max-w-4xl col-span-4 grid grid-cols-6 py-3 px-4 ${key % 2 === 0 ? 'bg-zinc-300' : `bg-zinc-200`}`} key={key}>
                                            <div className='col-span-3 text-sm'>{item.name}</div>
                                            {/* <div className='text-base'>{re.exec(item.name)[1]}</div> */}
                                            <div className='text-base'>{item.type}</div>
                                            <div>
                                                <Link href={item._links.html} passHref>
                                                    <a target='_blank' className='text-sm mr-4 text-slate-800'>Github</a>
                                                </Link>
                                                |
                                                <Link href={item._links.self} passHref>
                                                    <a target='_blank' className='text-sm ml-4 text-slate-800'>View</a>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                }
                                )}
                            </div>
                            <div className='flex mx-20 max-w-2xl'>
                                <div className=' flex mx-auto mt-4'>

                                    {pageArr.map((item: any, key: any) => {
                                        return (
                                            <button className='mx-1 border-2 px-2' key={key} onClick={() => setPageNum(key)}>
                                                {key + 1}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div >

            </div>
        </Layout >
    )
}

export default Res
