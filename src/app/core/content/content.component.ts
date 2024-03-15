import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    MatCard,],
  templateUrl: './content.component.html',
  styleUrl: './content.component.sass'
})
export class ContentComponent {

}
