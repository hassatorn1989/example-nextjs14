import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
    const data = await response.json()
    return data
})

// export const insertUser = createAsyncThunk('user/insertUser', async (data_: any) => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5', {
//         method: 'POST',
//         body: JSON.stringify(data_),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     const data = await response.json()
//     return data
// })

const initialState = {
    entities: [],
    value: 0,
} as any

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: { 
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.entities = action.payload
        })
    }
})

export default userSlice.reducer