import React from 'react'
import { createIcon } from '../createIcon'

export const CryptoComBadge = createIcon({
    path: (
        <>
            <path
                d="M0 8C0 3.58172 3.58172 0 8 0H16C20.4183 0 24 3.58172 24 8V16C24 20.4183 20.4183 24 16 24H8C3.58172 24 0 20.4183 0 16V8Z"
                fill="white"
            ></path>
            <path
                d="M11.9623 2.72095L3.92458 7.36046V16.6395L11.9623 21.279L20 16.6395V7.36046L11.9623 2.72095Z"
                fill="url(#CryptoComBadge_a)"
            ></path>
            <path
                d="M11.9623 2.72095L3.92458 7.36046V16.6395L11.9623 21.279V2.72095Z"
                fill="url(#CryptoComBadge_b)"
            ></path>
            <path
                d="M15.096 6.72961H8.78795L8.0554 9.94473H15.8693L15.096 6.72961ZM9.90713 14.3604V12.2238L8.03505 11.0436L5.91879 12.6104L8.8083 17.6366H9.96817L11.3315 16.3546V15.7238L9.90713 14.3604Z"
                fill="white"
            ></path>
            <path
                d="M13.9972 10.4331H9.92752L10.599 12.2238L10.3955 14.2383H13.5292L13.3257 12.2238L13.9972 10.4331Z"
                fill="white"
            ></path>
            <path
                d="M15.8693 11.0232L14.0176 12.2238V14.3604L12.6135 15.7237V16.3545L13.9769 17.6162H15.1164L17.9856 12.6104L15.8693 11.0232Z"
                fill="white"
            ></path>
            <defs>
                <linearGradient
                    id="CryptoComBadge_a"
                    x1="11.9552"
                    y1="2.72095"
                    x2="11.9552"
                    y2="21.2676"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#25376C"></stop>
                    <stop offset="1" stopColor="#1F1F49"></stop>
                </linearGradient>
                <linearGradient
                    id="CryptoComBadge_b"
                    x1="7.94038"
                    y1="21.2676"
                    x2="7.94038"
                    y2="2.72095"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#25376C"></stop>
                    <stop offset="1" stopColor="#1F1F49"></stop>
                </linearGradient>
            </defs>
        </>
    ),
})
