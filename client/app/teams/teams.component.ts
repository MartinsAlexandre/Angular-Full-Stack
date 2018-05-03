import { Component, OnInit } from '@angular/core';
import { DevService } from '../services/dev.service';
import { Dev } from '../shared/models/dev.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
})
export class TeamsComponent implements OnInit {
  dev = new Dev();
  devs: Dev[] = [];
  isLoading = true;

  constructor(private devService: DevService) { }
  ngOnInit() {
    this.getDevs();
  }
  getDevs() {
    this.devService.getDevs().subscribe(
      data => this.devs = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

}
