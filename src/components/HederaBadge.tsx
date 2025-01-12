import React from 'react'
import { createIcon } from '../createIcon'

export const HederaBadge = createIcon({
    path: (
        <>
            <path
                d="M0 8C0 3.58172 3.58172 0 8 0H16C20.4183 0 24 3.58172 24 8V16C24 20.4183 20.4183 24 16 24H8C3.58172 24 0 20.4183 0 16V8Z"
                fill="black"
            ></path>
            <path
                d="M17.2845 17.6224H15.6336V14.1125H8.3664V17.6224H6.71539V6.24097H8.3664V9.66641H15.6336V6.24097H17.2846L17.2845 17.6224ZM8.4444 12.7994H15.7114V10.986H8.4444V12.7994Z"
                fill="white"
            ></path>
        </>
    ),
})
