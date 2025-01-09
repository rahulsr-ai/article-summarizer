import { configureStore } from "@reduxjs/toolkit"; // Redux Toolkit ka function jo ek simple store banane ke kaam aata hai

import { articleApi } from "./Article"; // Article API slice import kiya jo humein API ke functions aur reducer provide karta hai

// Redux store create kar rahe hain
export const Store = configureStore({
    reducer: {
        // Yahan hum reducer specify karte hain
        // articleApi.reducerPath dynamically key banata hai aur uska reducer assign karta hai
        [articleApi.reducerPath]: articleApi.reducer,
    },
    // Middleware add karte hain jo extra functionality ke liye hota hai
    middleware: (getDefaultMiddleware) => 
        // Default middleware ke saath hum apne API middleware ko include karte hain
        getDefaultMiddleware().concat(articleApi.middleware),
});
