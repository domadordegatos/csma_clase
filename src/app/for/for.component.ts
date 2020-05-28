import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.scss']
})
export class ForComponent implements OnInit {

  estudiantes = [
    {nombre: "Neyder", apellido: "Neme", edad: 31},
    {nombre: "Salome", apellido: "Zambrano", edad: 15},
    {nombre: "Lucia", apellido: "Peña", edad: 15}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
