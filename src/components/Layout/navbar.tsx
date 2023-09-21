'use client';

import { useTheme } from 'next-themes';

export default function Navbar() {
    const { theme, setTheme } = useTheme();

    return (
        <div className={`flex flex-row justify-between items-center h-24 ps-10 pe-10 ${theme}_BGSecondary`}>
            <div className='custom_Title'>YTDownloadify</div>
            <div className='custom_Title flex flex-nowrap'>
                <i
                    className={`bi bi-${theme === 'dark' ? 'sun' : 'moon'}-fill me-5 custom_Hover`}
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                ></i>
            </div>
        </div>
    )
}