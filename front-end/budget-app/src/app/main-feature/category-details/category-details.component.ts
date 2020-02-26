import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DataService } from '../../shared/services/data.service';
import { Observable } from 'rxjs';
import { Item } from '../item';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
  item$: Observable<Item>


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    // this.item$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.dataService.getData(params.get('id')))
    // )
  }

}
