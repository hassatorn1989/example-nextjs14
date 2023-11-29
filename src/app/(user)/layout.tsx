import React from 'react'

interface Props {
    children: React.ReactNode;
}
export default function UserLayout({ children }: Props) {
    return (
        <>
            User Layout <br /><br />
            {children}
        </>
    )
}
