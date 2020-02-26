import { Component, OnInit } from '@angular/core';
import { PostdataService } from '../../../shared/services/postdata.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private dataService: PostdataService) { }

  itemForm = new FormGroup({
    plannedAmt: new FormControl(''),
  });

  Url = '/api/updateItem';

  onValueChange(): void {
    this.itemForm.valueChanges.subscribe(val=>{
      console.log(val)
    })
  }

  ngOnInit() {
    this.onValueChange();
  }

}
