import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Zuckerberg',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@fb.com',
      dateOfBirth: new Date('10/25/1980'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/zuckerberg.jpeg'
    },
    {
      id: 2,
      name: 'Linus',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'linus@linux.com',
      dateOfBirth: new Date('10/25/1980'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/linusTorvalds.png'
    },
    {
      id: 3,
      name: 'Time',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'tim@apple.com',
      dateOfBirth: new Date('10/25/1980'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/timCook.jpeg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
