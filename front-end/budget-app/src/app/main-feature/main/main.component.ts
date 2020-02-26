import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Item } from '../item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  items$: Observable<Item[]>;
  selectedId: number;

  constructor(
    private service: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.items$ = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     this.selectedId = +params.get('id');
    //     return this.service.getItems();
    //   })
    // )
  }

}
