import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../../main";

const initialState = {
  contacts: [],
  singleContact: null,
  totalContacts: 0,
  search: "",
  page: 1,
  limit: 10,
  totalPages: 0,
  success: false,
  loading: false,
  error: null,
};

export const contactUs = createAsyncThunk(
  "contact/contact-us",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${server}/contact/contact-us`,
        formData
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "failed to contact"
      );
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    resetContactState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(contactUs.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(contactUs.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(contactUs.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default contactSlice.reducer;
export const { setSearch, setPage, setLimit, resetContactState } =
  contactSlice.actions;
