import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  content: any[] = [
    {title: 'About', content: "Get to know me a bit more"},
    {title: 'Projects', content: "A gallery of all my projects"},
    {title: 'Contact me', content: "Get in touch"},

  ]



  constructor(private route: ActivatedRoute, private router: Router) {}

  isActivePage(routePath: string): boolean {
    return this.router.url === routePath;
  }

  ngOnInit(): void {
    if (this.router.url.startsWith("/pages")) {
      console.log("Nous sommes dans l'écran de gestion des utilisateurs.");
    }
  }


}
