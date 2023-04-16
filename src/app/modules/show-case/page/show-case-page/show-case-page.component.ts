import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadItems, loadedItems } from 'src/app/state/actions/items.actions';
import { AppState } from 'src/app/state/app.state';
import { selectLoading } from 'src/app/state/selectors/items.selectors';
import { ShowCaseService } from '../../services/show-case.service';
import { ItemModel } from 'src/app/core/models/item.interface';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css']
})
export class ShowCasePageComponent implements OnInit {

  loading$: Observable<boolean> = new Observable();

  constructor(private store: Store<AppState>, private showCaseService: ShowCaseService) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);

    this.showCaseService.getDataApi().subscribe((response: ItemModel[]) => {
      this.store.dispatch(loadedItems({items: response}));
    });

    this.store.dispatch(loadItems());
  }

  loadData(): void {

  }

}
