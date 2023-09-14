export default function Navbar() {
    return (
        <div className='flex flex-row justify-between'>
            <div className='font-bold text-4xl'>YTDownloadify</div>
            <div className='text-3xl'>
                <i className='bi bi-sun me-5 dark_Hover'></i>
                <i className='bi bi-moon ms-5 dark_Hover'></i>
            </div>
        </div>   
    )
}