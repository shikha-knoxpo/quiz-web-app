import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Resource } from "../../../redux/models";
import { UserProfileModel } from "./models";
import { userProfile } from "./service";

export const getUserProfileAction = createAsyncThunk<
  any,
  { emailID: string; password: string },
  any
>("userInfo/getById", async ({ emailID, password }, { rejectWithValue }) => {
  try {
    const data = await userProfile(emailID, password);

    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const initialState = {
  isPending: false,
} as Resource<UserProfileModel>;

export const UserProfileReducers = createSlice({
  name: "UserProfile",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getUserProfileAction.pending, (state) => {
      return {
        isPending: true,
      } as Resource<UserProfileModel>;
    });
    builder.addCase(getUserProfileAction.fulfilled, (state, { payload }) => {
      console.log(payload, "Payload");
      return {
        resource: { ...payload },
      } as Resource<UserProfileModel>;
    });

    builder.addCase(getUserProfileAction.rejected, () => {
      return {
        //errorMessage: "Some error 1",
        resource: { id: 1, userName: "Test Name" },
      } as Resource<UserProfileModel>;
    });
  },
});
export default UserProfileReducers.reducer;
