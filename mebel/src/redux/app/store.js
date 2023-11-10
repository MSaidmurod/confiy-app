import { configureStore } from "@reduxjs/toolkit";
import ConfigSlice from '../feature/configSlice'

export const store = configureStore({
    reducer:{
        config: ConfigSlice
    }
})