interface ContentProps {
    input: string;
}

export default function Content({ input }: ContentProps) {
    return (
        <h1>{(!input) ? "Nothing" : input}</h1>
    )
}