import { useRouter } from "next/router";
import Link from "next/link";

export default function ResourcesNav() {
    const router = useRouter()
    return (
        <div className='flex justify-between mb-8 mt-16 border-b-2 pb-2'>
            <div className='flex space-x-8 self-end max-w-2xl '>
                <h2 className={`font-medium ${router.pathname.split('/')[2] === 'data' ? "text-blue-400" : ""}`}>
                    <Link href='/resource/data'>Data</Link>
                </h2>
                <h2 className={`font-medium ${router.pathname.split('/')[2] === 'journals' ? "text-blue-400" : ""}`}>
                    <Link href='/resource/journals'>Journals</Link>
                </h2>
                <h2 className={`font-medium ${router.pathname.split('/')[2] === 'articles' ? "text-blue-400" : ""}`}>
                    <Link href='/resource/articles'>Articles</Link>
                </h2>
                <h2 className={`font-medium ${router.pathname.split('/')[2] === 'licensing' ? "text-blue-400" : ""}`}>
                    <Link href='/resource/licensing'>Licensing Info</Link>
                </h2>
            </div>
            <button className=' border-slate-500 border-2 text-sm text-slate-800 py-1 px-3 rounded-lg hover:bg-neutral-700 hover:text-slate-500 self-start'>+ Suggest Resource</button>
        </div>
    )
}