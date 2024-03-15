import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import data from '../../assets/data.json';
@Component({
  selector: 'map-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      import('leaflet').then((L) => {
        navigator.geolocation.getCurrentPosition((position) => {
          const map = L.map('map').setView(
            [position.coords.latitude, position.coords.longitude],
            13
          );
          const userIcon = L.icon({
            iconUrl: 'assets/user-marker.webp', 
            iconSize: [16, 16], 
            iconAnchor: [0, 0], 
          });

          
          L.marker(
            [position.coords.latitude, position.coords.longitude],
            { icon: userIcon } 
          ).addTo(map)
          .bindPopup(`moi`);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '',
          }).addTo(map);

          data.map((itm, idx) => {
            L.marker([itm.location.x, itm.location.y])
              .addTo(map)
              .bindPopup(`${itm.title}<br> ${itm.population} habitants`);
          });
        });
      });
    }
  }
}
