import { combineReducers } from "redux";

const regionsReducer = () => {
  return [
    { name: "Boston", value: 20 },
    { name: "Seattle", value: 30 },
    { name: "New York", value: 40 },
    { name: "Washiongton", value: 10 }
  ];
};

const selectedRegionReducer = (selectedRegion = null, action) => {
  if (action.type === "REGION_SELECTED") {
    return action.payload;
  }

  return selectedRegion;
};

export default combineReducers({
  regions: regionsReducer,
  selectedRegion: selectedRegionReducer
});
