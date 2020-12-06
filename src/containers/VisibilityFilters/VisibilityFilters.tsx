import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  visibilityFilterSlice,
  VISIBILTY_FILTER_TYPE,
} from '../../features/visibilityFilter';
import { VISIBILITY_FILTER } from '../../constans';
import { RootState } from '../../types';
import './VisibilityFilters.css';

const VisibilityFilters: FC = () => {
  const dispatch = useDispatch();
  const { changed } = visibilityFilterSlice.actions;
  const visibilityFilterState = useSelector(
    (state: RootState) => state.visibilityFilter,
  );

  return (
    <div>
      {Object.entries(VISIBILITY_FILTER).map(([_, currentFilter]) => {
        return (
          <text
            key={`visibility-filter-${currentFilter}`}
            className={`filter ' + ${
              currentFilter === visibilityFilterState.visibilityFilter
                ? 'filter--active'
                : ''
            }`}
            onClick={() => {
              dispatch(changed(currentFilter as VISIBILTY_FILTER_TYPE));
            }}
          >
            {currentFilter}
          </text>
        );
      })}
    </div>
  );
};

export default VisibilityFilters;
