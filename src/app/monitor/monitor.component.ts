import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  arr = ["lorem", "ipsum", "test 1"]

  button1Name = "ONN"
  button2Name = "OFF"

  usersList: any = [];

  isStarted = true;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(
      res => {
        this.usersList = res;
      },
      err => { }
    )
  }

  changeIsStartedValue(value: boolean) {
    this.isStarted = value;
  }
}
