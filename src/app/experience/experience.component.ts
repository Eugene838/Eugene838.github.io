import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Intern =
  {
    Company: "Intern, DigiFort",
    startDate: "July 2017",
    endDate: "December 2017",
    Project: ["Digitalized taking of leave into an application using Java and MySQL. ",
      "Using Windows Form as a software application with basic CRUD functionality and calculation of leaves/Pro-rated leaves.",
      "Basic CRUD functionality and calculation of leaves/Pro-rated leaves."],
  }
}
