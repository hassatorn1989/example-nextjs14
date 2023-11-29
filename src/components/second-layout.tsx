interface Props {
    children: React.ReactNode;
}


export default function SecondLayout({ children }: Props) {
    return (
        <>
            Second Layout <br /><br />
            {children}
        </>
    )
}