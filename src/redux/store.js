import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { UserProfileReducers } from "../components/Login/state/reducer";


export const store = configureStore({
    reducer: {
      user: UserProfileReducers,
     
    },
  });
  
  setupListeners(store.dispatch);
  