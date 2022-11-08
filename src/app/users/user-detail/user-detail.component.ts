import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  @Input() data!: { name: string; surname: string; }

  fullname!: string;

  constructor() { }

  ngOnInit(): void {
    this.initFullName();
   }

  returnNameFromGivenData() {
    return this.data.name;
  }

  initFullName() {
    this.fullname = Object.values(this.data).join(' ');
  }
}
