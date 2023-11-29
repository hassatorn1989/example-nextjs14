import React from 'react'

export default function Page({ params }: { params: { id: string } }) {
    return (
        <>
            <h1>Hello, About Page! {params.id[1]}</h1>
        </>
    )
}
