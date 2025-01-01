import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, RouterLink, RouterLinkActive],
  providers: [MyServiceService],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  firstName: string = "angular-18";
  year: number = 2024;
  isActive: boolean = false;
  currentDate: Date = new Date();
  imageUrl: string = 'https://picsum.photos/200/300';
  items: string[] = ['Apple', 'Banana', 'orange'];
  isListEmpty: boolean = this.items.length === 0;
  angularButtonclicked(): void {
    alert('Angular Button clicked');
  }
  buttonclicked(clickbtns: string) {
    alert(clickbtns);
  }
  isHighlighted = false;
  isBold = true;
  textColor = 'blue';
  fontSize = 18;
  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
    this.textColor = this.isHighlighted ? 'green' : 'blue';
    this.fontSize = this.isHighlighted ? 24 : 18;
  }
  message: string = "";
  constructor(private MyServiceService: MyServiceService) {
    this.message = this.MyServiceService.getMessage();
  }
}
