import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/Data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  // providers: [FetchdataService]
})
export class WelcomeComponent implements OnInit {
  posts;

  Url = '/api/registerUser';

  constructor(private dataService: DataService) {}

  getPosts(): void {
    this.dataService.getData(this.Url).subscribe(data => (this.posts = data));
  }

  ngOnInit() {
    this.getPosts();
  }
}
