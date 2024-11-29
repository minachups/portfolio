import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  standalone: false,
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit {

  public date = new Date();

  ngOnInit() {


  }



}
