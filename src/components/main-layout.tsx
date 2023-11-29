interface Props {
    children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
    return (
        <>
            Main Layout <br /><br />
            {children}
        </>
    )
}