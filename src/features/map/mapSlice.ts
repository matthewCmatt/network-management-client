import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ViewState } from "react-map-gl";

export interface IMapState {
  viewState: Partial<ViewState>;
  edgesFeatureCollection: GeoJSON.FeatureCollection | null;
}

export const initialMapState: IMapState = {
  viewState: {
    latitude: 0.0,
    longitude: 0.0,
    zoom: 0.0,
  },
  edgesFeatureCollection: null,
};

export const mapSlice = createSlice({
  name: "map",
  initialState: initialMapState,
  reducers: {
    setViewState: (state, action: PayloadAction<IMapState["viewState"]>) => {
      state.viewState = action.payload;

      console.warn("setting view state", state.viewState);
    },
    setPosition: (
      state,
      action: PayloadAction<{ latitude: number; longitude: number }>,
    ) => {
      state.viewState.latitude = action.payload.latitude;
      state.viewState.longitude = action.payload.longitude;
    },
    setZoom: (state, action: PayloadAction<number>) => {
      state.viewState.zoom = action.payload;
    },
    setEdgesFeatureCollection: (
      state,
      action: PayloadAction<GeoJSON.FeatureCollection | null>,
    ) => {
      state.edgesFeatureCollection = action.payload;
    },
  },
});

export const { actions: mapSliceActions, reducer: mapReducer } = mapSlice;
