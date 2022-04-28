import React from 'react'
import { createIcon } from '../createIcon'

export const AbbcBadge = createIcon({
    path: (
        <>
            <path
                d="M0 8C0 3.58172 3.58172 0 8 0H16C20.4183 0 24 3.58172 24 8V16C24 20.4183 20.4183 24 16 24H8C3.58172 24 0 20.4183 0 16V8Z"
                fill="#FE9B00"
            ></path>
            <path
                d="M22.9999 12.0019C23.0074 18.0206 18.1294 23 12.0018 23C5.87424 23 0.996189 18.0169 0.999941 11.9944C1.00369 5.97186 5.87424 1 12.0056 1C18.1369 1 23.0112 5.98687 22.9999 12.0019Z"
                fill="#FE9B00"
            ></path>
            <path
                d="M20.4559 13.3677C20.4371 13.3302 20.4521 13.3002 20.4521 13.2702C20.5159 12.6173 20.0994 12.0394 19.469 11.9043C19.0563 11.818 18.6885 11.9343 18.3733 12.2045C17.9906 12.5309 17.6266 12.8799 17.2664 13.2326C16.8274 13.6642 16.3971 14.1032 15.9756 14.5497C15.6791 14.8649 15.3339 15.1088 14.9212 15.2514C13.7579 15.6491 12.4859 15.0263 12.0431 13.9456C11.9906 13.8142 11.9943 13.788 12.0994 13.6979C12.3433 13.484 12.591 13.2739 12.8349 13.06C12.8424 13.0525 12.8499 13.0488 12.8574 13.0413C12.8874 13.0225 12.9099 12.9775 12.9474 12.9962C12.985 13.015 12.9624 13.0563 12.9662 13.0863C12.981 13.3764 13.0967 13.6522 13.2934 13.866C13.4901 14.0798 13.7553 14.2181 14.0431 14.257C14.6397 14.3396 15.2364 13.9756 15.4165 13.4052C15.6304 12.7298 15.2739 12.0582 14.5835 11.8368C14.1632 11.7017 13.7805 11.7917 13.4465 12.0694C13.1726 12.2946 12.9099 12.5309 12.6435 12.7673C12.4671 12.9249 12.2908 13.0863 12.1107 13.2401C12.0419 13.2991 11.9956 13.3799 11.9793 13.469C11.8367 14.1932 11.4315 14.7336 10.7898 15.09C10.388 15.3141 9.92628 15.4072 9.46901 15.3565C8.9717 15.3139 8.50163 15.1111 8.12942 14.7786C7.86627 14.5478 7.66068 14.2587 7.52905 13.9343C7.52118 13.9187 7.51489 13.9024 7.51029 13.8855C7.49708 13.8581 7.49398 13.8269 7.50153 13.7973C7.50908 13.7678 7.5268 13.7419 7.55156 13.7242C7.63787 13.6529 7.72042 13.5816 7.80672 13.5103C7.98308 13.3565 8.15944 13.2026 8.33956 13.0525C8.36957 13.0263 8.39959 12.9812 8.43712 12.9962C8.47464 13.0112 8.45963 13.0638 8.46338 13.1013C8.47207 13.3845 8.57494 13.6567 8.75572 13.8749C8.93649 14.093 9.18486 14.2447 9.46151 14.3058C9.77432 14.3724 10.1008 14.3171 10.3742 14.1511C10.6476 13.9851 10.8472 13.721 10.9324 13.4127C11.1576 12.5835 10.5009 11.7655 9.64537 11.8067C9.38464 11.8145 9.13439 11.9111 8.93618 12.0807C8.69228 12.2833 8.45213 12.4934 8.21573 12.7036C7.97183 12.9174 7.73168 13.1351 7.48777 13.349C7.45507 13.3756 7.42893 13.4095 7.41136 13.4479C7.3938 13.4863 7.38528 13.5282 7.38646 13.5703V15.1989C7.38646 15.3527 7.36395 15.3752 7.2101 15.3715C7.06552 15.3714 6.92265 15.3402 6.79121 15.28C6.65977 15.2198 6.54284 15.132 6.44837 15.0225C6.37333 14.9362 6.35832 14.9362 6.257 14.9925C5.88552 15.1989 5.49153 15.3114 5.06751 15.2964C4.19697 15.2664 3.5328 14.8724 3.08252 14.1257C2.87053 13.7738 2.76134 13.3695 2.76732 12.9587C2.76773 12.4194 2.95766 11.8975 3.30391 11.484C3.65663 11.0525 4.10691 10.7711 4.6585 10.681C5.39396 10.5647 6.06939 10.6998 6.63599 11.2139C6.81602 11.378 6.97259 11.5661 7.10128 11.773C7.11973 11.8145 7.15139 11.8488 7.19134 11.8705C7.21886 11.8529 7.24129 11.8284 7.25643 11.7995C7.27157 11.7705 7.27888 11.7381 7.27764 11.7054C7.27389 11.334 7.27764 10.9625 7.27764 10.5872C7.27764 9.74296 7.27639 8.89994 7.27389 8.05816C7.27389 7.89306 7.29265 7.8743 7.46151 7.8743C7.7105 7.8746 7.95067 7.96659 8.13616 8.1327C8.32165 8.2988 8.43947 8.5274 8.46714 8.77486C8.47462 8.8346 8.47838 8.89476 8.47839 8.95497V10.9249C8.48214 11.015 8.50091 11.0263 8.58346 10.985C8.82469 10.8572 9.08621 10.7722 9.35644 10.7336C10.0281 10.6398 10.6285 10.8086 11.1613 11.2289C11.3397 11.3722 11.4953 11.5418 11.6229 11.7317C11.6303 11.7451 11.6391 11.7576 11.6491 11.7692C11.6754 11.8067 11.6979 11.848 11.7467 11.8555C11.773 11.8593 11.848 11.7617 11.8518 11.7204C11.8581 11.6694 11.8606 11.618 11.8593 11.5666V8.9287C11.8593 8.38462 12.197 7.97561 12.7336 7.8743C12.7926 7.86045 12.8531 7.85414 12.9137 7.85554C12.9925 7.85929 13.0262 7.88931 13.045 7.96435C13.0574 8.02354 13.0625 8.08404 13.06 8.14447V10.9174C13.0675 10.9662 13.0825 10.9812 13.1313 10.9625C13.1951 10.9362 13.2589 10.9062 13.3227 10.8799C14.2232 10.5197 15.2326 10.7373 15.8855 11.4353C16.1047 11.6713 16.2755 11.9479 16.3883 12.2495L16.4109 12.3171C16.4484 12.4146 16.4596 12.4184 16.5384 12.3471L17.5966 11.4128C17.8932 11.1424 18.2533 10.9513 18.6435 10.8574C19.1911 10.7292 19.7666 10.8023 20.2647 11.0634C20.7629 11.3245 21.1504 11.7562 21.3564 12.2795C21.378 12.3223 21.3846 12.3711 21.375 12.4181C21.3655 12.4651 21.3404 12.5075 21.3039 12.5385C21.045 12.7936 20.7936 13.0525 20.5347 13.3114C20.5126 13.3355 20.4858 13.3547 20.4559 13.3677V13.3677Z"
                fill="#191C31"
            ></path>
            <path
                d="M19.439 14.3846C19.4381 14.3988 19.4339 14.4127 19.4267 14.425C19.4196 14.4374 19.4096 14.448 19.3977 14.4559C19.1238 14.7298 18.8499 15.0037 18.5797 15.2814C18.5577 15.3072 18.5278 15.3253 18.4947 15.3327C18.4615 15.3401 18.4268 15.3366 18.3958 15.3226C17.7504 15.0825 17.2939 14.646 17.0263 14.0131C16.985 13.9193 16.9925 13.8892 17.0675 13.8255C17.3339 13.5928 17.6041 13.3602 17.8705 13.1313C17.8874 13.1124 17.9097 13.0993 17.9343 13.0938C17.9606 13.12 17.9531 13.1538 17.9568 13.1838C17.9703 13.3603 18.0148 13.5331 18.0882 13.6941C18.2645 14.0619 18.5647 14.272 18.9512 14.3658C19.0336 14.3846 19.1182 14.3922 19.2026 14.3883C19.2776 14.3808 19.3564 14.3846 19.439 14.3846Z"
                fill="#191C31"
            ></path>
            <path
                d="M6.36214 12.9887C6.3809 13.6566 5.81055 14.2382 5.11637 14.2457C4.78471 14.2474 4.46587 14.1177 4.2296 13.885C3.99333 13.6522 3.85885 13.3354 3.85558 13.0037C3.84432 12.3208 4.38091 11.7354 5.11637 11.7204C5.79554 11.7054 6.36589 12.2607 6.36214 12.9887Z"
                fill="#FF9C00"
            ></path>
        </>
    ),
})