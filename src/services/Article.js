// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// export const articleApi = createApi({
//   reducerPath: "articleApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
//     prepareHeaders: (headers) => {
//       headers.set("x-rapidapi-key", rapidApiKey);
//       headers.set(
//         "x-rapidapi-host",
//         "article-extractor-and-summarizer.p.rapidapi.com"
//       );

//       return headers;
//     },
//   }),
//   endpoints: (build) => ({
//     getSummary: build.query({
//       query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
//     }),
//   }),
// });

// export const { GetSummaryQuery } = articleApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Redux Toolkit ka function jo API integration simplify karta hai

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY; // API key environment variable se le rahe hain for security

// API slice create kar rahe hain
export const articleApi = createApi({
  // Redux store mein ek unique key jo is API slice ko represent karegi
  reducerPath: "articleApi",

  // Base query define kar rahe hain jo har API request ke liye use hoga
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/", // API ka base URL
    prepareHeaders: (headers) => {
      // Headers mein RapidAPI key aur host set karte hain
      headers.set("X-RapidAPI-Key", rapidApiKey); // API key ko headers mein include kar rahe hain
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      ); // Host header set karna zaroori hai RapidAPI ke liye

      return headers; // Updated headers wapas bhej rahe hain
    },
  }),

  
  // API ke endpoints define karte hain
  endpoints: (builder) => ({
    getSummary: builder.query({
      // Query define kar rahe hain jo summarize endpoint ko hit karega
      // encodeURIComponent use karte hain taaki special characters URL mein properly handle ho
      query: (params) =>
        `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`, // Article URL ke basis par summary length = 3 specify ki
    }),
  }),
});

// React hooks generate karte hain jo components mein data fetching ke liye use hote hain
export const { useLazyGetSummaryQuery } = articleApi;
