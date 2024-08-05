"use client"

import { useState } from "react"

export default function ShareLinkButton(params) {
    const [copied, setCopied] = useState(false)

    const handleClick = () => {
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 3000);
    }

    return (
        <button
            onClick={handleClick}
            className="border px-2 py-1 rounded text-gray-500 text-sm hover:bg-gray-200 hover:text-gray-700">
                {copied ? "Link Copied" : "Share Link"}
            </button>
    )
}