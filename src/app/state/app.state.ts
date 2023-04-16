import { ActionReducerMap } from "@ngrx/store";
import * as fromItemsReducer from "./reducers/items.reducers";

export interface AppState {
    itemsG: fromItemsReducer.ItemsState;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    itemsG: fromItemsReducer.itemsReducer
}