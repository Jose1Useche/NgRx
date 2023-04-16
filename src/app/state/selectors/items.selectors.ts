import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ItemsState } from '../reducers/items.reducers';
 
export const selectItemsFeature = (state: AppState) => state.itemsG;
 
export const selectListItems = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.items
);

export const selectLoading = createSelector(
    selectItemsFeature,
    (state: ItemsState) => state.loading
  );