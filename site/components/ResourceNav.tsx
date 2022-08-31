import { useRouter } from "next/router";
import Link from "next/link";

export default function ResourcesNav() {
    const router = useRouter()
    return (
        <div className='flex justify-between mb-8 mt-16 border-b-2 border-slate-200 pb-4'>
            <div className='flex space-x-8 self-end max-w-2xl '>
                <h2 className={`font-medium ${router.pathname.split('/')[2] === 'data' ? "text-slate-800 underline decoration-2 underline-offset-8" : ""}`}>
                    <Link href='/resource/data'>Data</Link>
                </h2>
                <h2 className={`font-medium ${router.pathname.split('/')[2] === 'journals' ? "text-slate-800 underline decoration-2 underline-offset-8" : ""}`}>
                    <Link href='/resource/journals'>Journals</Link>
                </h2>
                <h2 className={`font-medium ${router.pathname.split('/')[2] === 'articles' ? "text-slate-800 underline decoration-2 underline-offset-8" : ""}`}>
                    <Link href='/resource/articles'>Sources</Link>
                </h2>
            </div>
            <button className=' border-slate-700 border-2 text-sm text-slate-800 py-1 px-3 hover:bg-neutral-700 hover:text-slate-500 self-start'>+ Suggest Resource</button>
        </div>
    )
}