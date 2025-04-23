import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "@/services/apiConfig";
import { Genre } from "@/types/types";

// Thunk para buscar gêneros
export const fetchGenres = createAsyncThunk(
  "genres/fetchGenres",
  async (): Promise<Genre[]> => {
    const response = await apiClient.get("/genre/movie/list");
    return response.data.genres;
  }
);

// Slice para gerenciar gêneros
const genreSlice = createSlice({
  name: "genres",
  initialState: {
    genres: [] as Genre[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.loading = false;
        state.genres = action.payload;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default genreSlice.reducer;
