interface NavbarProps {
    theme: string;
    updateTheme: () => void;
}

export default function Navbar({ theme, updateTheme }: NavbarProps) {
    return (
        <div className={`flex flex-row justify-between items-center h-24 ps-10 pe-10 ${theme}_BGSecondary`}>
            <div className='custom_Title'>YTDownloadify</div>
            <div className='custom_Title flex flex-nowrap'>
                <i className={`bi bi-${theme === 'dark' ? 'sun' : 'moon'} me-5 custom_Hover`} onClick={updateTheme}></i>
            </div>
        </div>   
    )
}