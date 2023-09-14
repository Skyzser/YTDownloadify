export default function Navbar() {
    return (
        <div className='flex flex-row justify-between items-center h-24 ps-10 pe-10 dark_BGSecondary'>
            <div className='custom_Title'>YTDownloadify</div>
            <div className='custom_Title flex flex-nowrap'>
                <i className='bi bi-sun me-5 dark_Hover'></i>
                <i className='bi bi-moon ms-5 dark_Hover'></i>
            </div>
        </div>   
    )
}