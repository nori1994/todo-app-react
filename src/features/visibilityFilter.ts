/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { VISIBILITY_FILTER } from '../constans';

export type VisibilityFilterState = {
  visibilityFilter: VISIBILTY_FILTER_TYPE;
};

export type VISIBILTY_FILTER_TYPE = 'INCOMPLETE' | 'COMPLETED';

export const visibilityFilterSlice = createSlice({
  name: 'visibilityFilter',
  initialState: {
    visibilityFilter: VISIBILITY_FILTER.INCOMPLETE,
  } as VisibilityFilterState,
  reducers: {
    changed: (state, action: PayloadAction<VISIBILTY_FILTER_TYPE>) => {
      const changedValue = action.payload;
      state.visibilityFilter = changedValue;
    },
  },
});
