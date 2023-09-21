interface SearchBoxProps {
    theme: any;
    updateText: (text: string) => void;
}

export default function SearchBox({ theme, updateText }: SearchBoxProps) {
    return (
        <div className='w-full h-3/5 ps-10 pe-10'>
            <input 
                className={`w-full h-full ps-5 pe-5 outline-none rounded-lg ${theme}_BGSecondary custom_Subtitle`} 
                type='text' 
                placeholder='Search...' 
                onChange={(e) => updateText(e.target.value)}
            />
        </div>
    )
}