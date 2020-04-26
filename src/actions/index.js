// Action creator
export const selectRegion = region => {
  // Return an action
  return {
    type: "REGION_SELECTED",
    payload: region
  };
};
