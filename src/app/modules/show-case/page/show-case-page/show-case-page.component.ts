import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadItems, loadedItems } from 'src/app/state/actions/items.actions';
import { AppState } from 'src/app/state/app.state';
import { selectLoading } from 'src/app/state/selectors/items.selectors';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css']
})
export class ShowCasePageComponent implements OnInit {

  loading$: Observable<boolean> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);

    this.store.dispatch(loadItems());
  }
}
