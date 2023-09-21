'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';

import SearchBox from '../components/Page/searchBox';
import Content from '../components/Page/content';

export default function Home() {
    const { theme } = useTheme();
    const [text, setText] = useState('');

    const updateText = (text: string) => setText(text);

    return (
        <div className={`flex justify-center w-full pt-10 pb-10 ${theme}_BGPrimary`}>
            <div className='flex flex-col h-full w-3/4'>
                <div className='flex justify-center items-center h-24'>
                    <SearchBox theme={theme} updateText={updateText} />
                </div>
                <div className='bg-green-500 flex flex-1 justify-center overflow-auto pt-12'>
                    <Content text={text} />
                </div>
            </div>
        </div>
    )
}