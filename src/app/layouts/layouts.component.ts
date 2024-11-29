import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-layouts',
    templateUrl: './layouts.component.html',
    standalone: false,
    styleUrls: ['./layouts.component.css']
})

/**
 * Layout Component
 */
export class LayoutComponent implements OnInit {

    layoutType!: string;

    constructor() { }

    ngOnInit(): void {


    }




}
