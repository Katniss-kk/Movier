import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { IFilm } from "../../types/types";

interface DataFilm {
  films: IFilm[];
  link: string;
  loading: boolean;
  error: string;
}

const initialState: DataFilm = {
  films: [],
  link: "",
  loading: false,
  error: "",
};

export const fetchFilmsByYear = async (year: string): Promise<IFilm[]> => {
  try {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;
    const baseUrl = import.meta.env.VITE_OMDB_BASE_URL;

    const response = await fetch(
      `${baseUrl}?apikey=${apiKey}&s=movie&y=${encodeURIComponent(
        year
      )}&type=movie`
    );

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    if (data.Response === "False") throw new Error(data.Error);

    return data.Search || [];
  } catch (error) {
    console.error("Failed to fetch films:", error);
    throw error;
  }
};

export const fetchFilmIdThunk = createAsyncThunk(
  "film/fetchId",
  async (id: string, { rejectWithValue }) => {
    try {
      if (!id.trim()) {
        return rejectWithValue("Search title is required");
      }

      const apiKey = import.meta.env.VITE_OMDB_API_KEY;
      const baseUrl = import.meta.env.VITE_OMDB_BASE_URL;

      const response = await fetch(
        `${baseUrl}/?apikey=${apiKey}&i=${encodeURIComponent(id)}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.Response === "False") {
        return rejectWithValue(data.Error || "Unknown error from API");
      }

      return data.Search;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Failed to fetch films");
    }
  }
);

export const fetchFilmTitleThunk = createAsyncThunk(
  "film/fetchTitle",
  async (title: string, { rejectWithValue }) => {
    try {
      if (!title.trim()) {
        return rejectWithValue("Search title is required");
      }

      const apiKey = import.meta.env.VITE_OMDB_API_KEY;
      const baseUrl = import.meta.env.VITE_OMDB_BASE_URL;

      const response = await fetch(
        `${baseUrl}/?apikey=${apiKey}&s=${encodeURIComponent(title)}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.Response === "False") {
        return rejectWithValue(data.Error || "Unknown error from API");
      }

      return data.Search;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Failed to fetch films");
    }
  }
);

const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    clearFilms: (state) => {
      state.films = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmTitleThunk.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchFilmTitleThunk.fulfilled, (state, action) => {
        state.films = [...state.films, ...action.payload];
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchFilmTitleThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchFilmIdThunk.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchFilmIdThunk.fulfilled, (state, action) => {
        state.films = [...state.films, ...action.payload];
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchFilmIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearFilms } = filmSlice.actions;
export const filmReducer = filmSlice.reducer;
