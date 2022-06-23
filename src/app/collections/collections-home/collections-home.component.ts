import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data: any[] = [
    { name: 'James', age: 24, job: 'Designer', employed: 'true' },
    { name: 'Hillary', age: 30, job: 'Data Engineer', employed: 'true' },
    { name: 'Osborn', age: 29, job: 'Developer',employed: 'true' }
  ];

  headers: any[] =[
    { key: 'employed', label: 'Has a Job?'},
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
