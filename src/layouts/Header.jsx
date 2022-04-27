import React from 'react'

export default function Header() {
    return (
        <div className="flex flex-row h-16 justify-between items-center text-white bg-violet-400">
            <div className="flex flex-row space-x-2">
                <div> Logo </div>
                <div> HCMP </div>
            </div>
            <div>
                <div> Account </div>
            </div>
        </div>
    )
}
