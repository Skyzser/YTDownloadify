'use client';

import { useTheme } from 'next-themes';

export default function Home() {
    const { theme } = useTheme();
    return (
        <div className={`${theme}_BGPrimary w-full overflow-auto`}>
            <div>Hello world</div>
        </div>
    )
}