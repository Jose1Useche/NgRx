import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { ShowCaseService } from 'src/app/modules/show-case/services/show-case.service';
import * as fromActions from '../actions/items.actions';
 
@Injectable()
export class ItemsEffects {
 
  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadItems.type),
    mergeMap(() => this.showCaseServices.getDataApi()
      .pipe(
        map(items => ({ type: fromActions.loadedItems.type, items })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(private actions$: Actions, private showCaseServices: ShowCaseService) {}
}