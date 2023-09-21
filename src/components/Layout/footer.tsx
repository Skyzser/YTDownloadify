'use client';

import { useTheme } from 'next-themes';

export default function Footer() {
    const { theme } = useTheme();

    return (
        <div className={`flex flex-row justify-center items-center h-12 ${theme}_BGSecondary`}>
            <a className='custom_Text custom_Hover' href='https://github.com/Skyzser/YTDownloadify' target='_blank'>GitHub</a>
        </div>
    )
}