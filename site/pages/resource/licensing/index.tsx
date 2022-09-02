import type { NextPage } from 'next'
import Layout from '../../../components/Layout'
import ResourcesNav from '../../../components/ResourceNav'



const Contribute: NextPage = (props: any) => {
    return (
        <Layout title='Resources'>
            <div className='max-w-7xl mx-auto px-8 mt-10'>
                <ResourcesNav />
                <div className='max-w-xl mx-auto mt-16'>
                    <h3 className='text-xl my-4'>MIT License</h3>
                    <p className='text-base mb-8'>
                        Copyright (c) 2021 Open Knowledge Nepal
                    </p>
                    <p className='text-base my-2'>
                        {`Permission is hereby granted, free of charge, to any person obtaining a copy
                        of this software and associated documentation files (the "Software"), to deal
                        in the Software without restriction, including without limitation the rights
                        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                        copies of the Software, and to permit persons to whom the Software is
                        furnished to do so, subject to the following conditions:`}
                    </p>
                    <p className='text-base my-2'>{`The above copyright notice and this permission notice shall be included in all
                        copies or substantial portions of the Software.`}</p>
                    <p className='text-sm my-2'>{`THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                        SOFTWARE.`}</p>
                </div>
            </div>
        </Layout >
    )
}

export default Contribute
