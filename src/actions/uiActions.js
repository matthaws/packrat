export const TOGGLE_OPEN_CLOSE = "TOGGLE_OPEN_CLOSE";
export const UPDATE_FILTER_CATEGORY = "UPDATE_FILTER_CATEGORY";
export const UPDATE_FILTER_QUERY = "UPDATE_FILTER_QUERY";
export const UPDATE_FILTER_DATES = "UPDATE_FILTER_DATES";

export const toggleOpenClose = (component) => {
  return {
    type: TOGGLE_OPEN_CLOSE,
    component,
  };
};

export const updateFilterCategories = (categoryId) => {
  return {
    type: UPDATE_FILTER_CATEGORY,
    categoryId,
  };
};

export const updateFilterQuery = (query) => {
  return {
    type: UPDATE_FILTER_QUERY,
    query,
  };
};

export const updateFilterDates = (date, isStart) => {
  return {
    type: UPDATE_FILTER_DATES,
    date,
    isStart,
  };
};
