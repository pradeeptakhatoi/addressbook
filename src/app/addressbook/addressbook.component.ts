import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.scss']
})
export class AddressbookComponent implements OnInit {
  public addresses = [
    {
      name: "Andy",
      location: "US",
      phone: "111",
      created: "2021-01-01",
    },
    {
      name: "Bob",
      location: "US",
      phone: "222",
      created: "2021-01-01",
    },
    {
      name: "Sandy",
      location: "US",
      phone: 333,
      created: "2021-01-01",
    },
    {
      name: "Jimmy",
      location: "US",
      phone: "444",
      created: "2021-01-01",
    }
  ];
  private checkedList: number[] = [];
  constructor() { }

  ngOnInit(): void { }

  public add() {
    const newAddress = {
      name: "",
      location: "",
      phone: "",
      created: new Date().toISOString().split('T')[0],
    };
    this.addresses = [...this.addresses, newAddress];
  }

  public check(e: any, index: number) {
    if (e.target.checked) {
      if (!this.checkedList.includes(index))
        this.checkedList.push(index);
    } else {
      if (this.checkedList.includes(index))
        this.checkedList.splice(this.checkedList.indexOf(index), 1);
    }
  }

  public delete() {
    if (this.checkedList.length > 0) {
      this.addresses = this.addresses.filter((e, i) => !this.checkedList.includes(i));
      this.checkedList = [];
    }
  }

}
