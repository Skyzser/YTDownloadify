interface ContentProps {
    text: string;
}

export default function Content({ text }: ContentProps) {
    return (
        <h1>{(!text) ? "Nothing" : text}</h1>
    )
}