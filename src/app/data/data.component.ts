import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import dataJ from '../../assets/data.json';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'data-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css',
})
export class DataComponent {
  constructor(private http: HttpClient) {}
  data = dataJ;
  changeData(e: any, i: number) {
    this.data[i].population = Number(e.target.value);
    this.saveData()
  }
  saveData(): void {
    this.http.put('assets/data.json', this.data).subscribe(
      (error) => {
        console.error('Error saving data:', error);
      }
    );
  }
}
