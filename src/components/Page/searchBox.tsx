interface SearchBoxProps {
    theme: any;
    updateInput: (input: string) => void;
}

export default function SearchBox({ theme, updateInput }: SearchBoxProps) {
    return (
        <div className='w-full h-3/5 ps-10 pe-10'>
            <input 
                className={`w-full h-full ps-5 pe-5 outline-none rounded-lg ${theme}_BGSecondary custom_Subtitle`} 
                type='text' 
                placeholder='Search...' 
                onChange={(e) => updateInput(e.target.value)}
            />
        </div>
    )
}