import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  content: any[] = [
    {img: "/assets/images/startup.png", title: 'published on the 8th of november, 2024', title_description: "startup website..................................", description: "interaction model project", content: "i first created my website model on figma, and then built it in html and css, making sure to make it responsive. the design is simple, with harmonious blue tints."},
    {img: "/assets/images/together.png", title: 'published on the 25th of october, 2024 ', title_description: "Together...........................................", description: "social media app", content: "a social media platform where you can join a community based on your centers of interest. it’s aim is to create link between different year groups of a school. you can explore users profiles, chat with them, find an internship more easily, and interact with community groups. "},
    {img: "/assets/images/archi.png", title: 'created in 2022, 2023', title_description: "some architecture creations.....................", description: "3D models and watercolor painting", content: "pavilions models were made with rhinoceros 3D. they are minimalist yet singular. \n" +
          "watercolor colourful paint expresses life inside a building."},


  ]
}
