import React from 'react'
import { RefreshIcon } from '@heroicons/react/solid'
import { Listbox } from '@headlessui/react'
import { Menu } from '@headlessui/react'



export default function Header() {
    return (
        <div className="flex flex-row h-16 justify-between items-center text-white bg-slate-700">
            <div className="flex flex-row space-x-2">
                <div>  </div>
                <div className="text-2xl"> KT</div>
                <div className="text-2xl"> HCMP </div>
                <RefreshIcon className="w-5 h-5 ml-2 text-white hoover:text-white"/>
               
                <div className="flex flex-col items-center">
                <Menu>
                    <Menu.Button>프로젝트</Menu.Button>
                    <Menu.Items>
                        <Menu.Item>
                            {({ active }) => (
                              <a
                                className={`${active && 'bg-blue-500'}`}
                                href="/account-settings"
                              >
                                프로젝트1
                            </a>
                            )}
                        </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            className={`${active && 'bg-blue-500'}`}
                            href="/account-settings"
                        >
                                프로젝트2
                            </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                        <a
                            className={`${active && 'bg-blue-500'}`}
                            href="/account-settings"
                        >
                                프로젝트3
                            </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
                </div>
                <div className="flex flex-col items-center">
                <Menu>
                    <Menu.Button>프로바이더</Menu.Button>
                    <Menu.Items>
                        <Menu.Item>
                            {({ active }) => (
                              <a
                                className={`${active && 'bg-blue-500'}`}
                                href="/account-settings"
                              >
                                KT
                            </a>
                            )}
                        </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            className={`${active && 'bg-blue-500'}`}
                            href="/account-settings"
                        >
                                AWS
                            </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                        <a
                            className={`${active && 'bg-blue-500'}`}
                            href="/account-settings"
                        >
                                Azure
                            </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
                </div>
                <div className="flex flex-row space-x-2 items-center text-xs">
                    <div> 최근자원동기화 </div>
                </div>
            </div>
            
            <div>
                <div> CSP 콘솔 </div>
            </div>
        </div>
    )
}