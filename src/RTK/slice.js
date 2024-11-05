import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePokemonById } from "./thunk";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data: [],
        loading: true,
    },
    // 동기적 상태 변경
    reducers:{}, 
    //비동기적 상태 변경
    extraReducers: (builder)=>{
        builder
        //처리중
        .addCase(fetchMultiplePokemonById.pending, (state)=>{
            state.loading = true;
        })
        //처리실패
        .addCase(fetchMultiplePokemonById.rejected, (state)=>{
            state.loading = false;
        })
        //처리완료
        .addCase(fetchMultiplePokemonById.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload;
        })
    } 
}) // slice가 만들어졌다는 건 action, reducer가 만들어졌다는 뜻