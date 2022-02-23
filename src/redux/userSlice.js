import { createSlice } from "@reduxjs/toolkit";
import { parseJwt } from "src/utils/generic";

const initialState = {
  token: null,
  userCode: null,
  name: null,
  email: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
      if (action.payload != null) {
        const decryptedToken = parseJwt(action.payload);
        state.name = `${decryptedToken.firstName} ${decryptedToken.lastName}`;
        state.userCode = decryptedToken.userCode;
        state.email = decryptedToken.email;
      }
    },
  },
});

export const { setAccessToken } = userSlice.actions;

export default userSlice.reducer;
