import { createReducer, on } from '@ngrx/store';
import { ItemModel } from 'src/app/core/models/item.interface';
import { loadItems, loadedItems } from '../actions/items.actions';

export interface ItemsState {
  loading: boolean;
  items: ReadonlyArray<ItemModel>;
}

export const initialState: ItemsState = {
    loading: false,
    items: []
}

export const itemsReducer =  createReducer(
    initialState,
    on(loadItems, state => {
        return {
            ...state,
            loading: true
        }
    }),
    on(loadedItems, (state, {items}) => {
        return {
            ...state,
            loading: false,
            items
        }
    }),
    // on(bla bla bla),
    // on(bla bla bla),
    // on(bla bla bla),
);