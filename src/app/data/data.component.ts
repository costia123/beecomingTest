import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import dataJ from '../../assets/data.json';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'data-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css',
})
export class DataComponent {
  data = dataJ;
  showForm: boolean = false;
  newCapital: any = {
    title: null,
    country: null,
    population: null,
    location: {
      x: null,
      y: null,
    },
  };
  constructor(private http: HttpClient, formBuilder: FormBuilder) {}
  changeData(e: any, i: number, type: string) {
    switch (type) {
      case 'country':
        this.data[i].country = e.target.value;
        break;
      case 'population':
        this.data[i].population = Number(e.target.value);
        break;
      case 'locationX':
        this.data[i].location.x = Number(e.target.value);
        break;
      case 'locationY':
        this.data[i].location.y = Number(e.target.value);
        break;
      default:
        console.error('Invalid type');
    }

    this.saveData();
  }

  openForm(): void {
    this.showForm = true;
  }

  saveCapital(): void {
    console.log('ss', this.newCapital);
    this.data.push(this.newCapital)
    console.log(this.data)
    this.showForm = false;
  }
  saveData(): void {
    this.http.put('assets/data.json', this.data).subscribe((error) => {
      console.error('Error saving data:', error);
    });
  }
}
