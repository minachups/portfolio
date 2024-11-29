import { Component } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  standalone: false,
  
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.css'
})
export class RightSidebarComponent {


  content: any[] = [
    {title: 'NAME', content: "aminata BENSAÏD"},
    {title: 'Occupation', content: "ETHICAL CYBERSECURITY STUDENT"},
    {title: 'school', content: "HETIC, MONTREUIL (FRANCE)"},

  ]

}
