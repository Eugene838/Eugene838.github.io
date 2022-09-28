import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  title = "My journey";
  University =
    {
      school: "University of Wollongong",
      Qualification: "Degree in Cyber Security",
      FYP: ["Developed a Dental Health Management Record Web application using PHP, HTML, JavaScript, Bootstrap, MySQL",
        "Create, Retrieve, Update and Delete functionalities for respective stakeholders",
        "Hosted on live website on Hostinger"],
    }
    Polytechnic =
    {
      school: "Temasek Polytechnic",
      Qualification: "Diploma in Information technology",
      FYP: "Intern at Digifort",
    }


}
