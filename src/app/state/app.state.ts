import { ActionReducerMap } from "@ngrx/store";
import * as fromItemsReducer from "./reducers/items.reducers";

export interface AppState {
    items: fromItemsReducer.ItemsState
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    items: fromItemsReducer.itemsReducer
}