import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import github from '../public/github.png'

const navigation = [
    { name: 'Home', href: '/', current: false },
    // { name: 'Notes', href: '/notes/', current: false },
    { name: 'Resources', href: '/resource/data', current: false },
    { name: 'Playbook', href: '/playground', current: false },
    { name: 'Contribute', href: '/contribute', current: false },
    { name: 'Github', href: 'https://github.com/okfnepal/climatedata', current: false }
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-3">
                        <div className="relative flex items-center h-16 ">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1  lg:justify-between sm:items-stretch sm:justify-between  w-full">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link href="/">
                                        <a className='text-xl text-slate-800 font-bold'>
                                            Climate Knowledge Nepal
                                        </a>
                                    </Link>
                                </div>
                                <div className="hidden sm:block sm:ml-6 ">
                                    <div className="flex space-x-4">
                                        {navigation.map((item, key) => (
                                            <Link href={item.href} key={key} passHref>
                                                <a
                                                    key={item.name}
                                                    rel='noreferrer'
                                                    target={item.name === 'Github' ? '_blank' : ''}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'text-red-400' : 'hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-lg font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}