'use client';

import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';

export default function Providers({ children }: { children: React.ReactNode}) {
    /*
        Because we cannot know the theme on the server, many of the values returned from useTheme will be undefined until mounted on the client. 
        This means if you try to render UI based on the current theme before mounting on the client, you will see a hydration mismatch error.

        To avoid this, you can use the mounted state to conditionally render your UI:
    */
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <ThemeProvider attribute='class'>
            {children}
        </ThemeProvider>
    )
}