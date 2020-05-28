import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-if',
  templateUrl: './ejercicio-if.component.html',
  styleUrls: ['./ejercicio-if.component.scss']
})
export class EjercicioIfComponent implements OnInit {

  mostrar:boolean=true;

  constructor() { }

  ngOnInit(): void {}

  ver(){
    this.mostrar=true;
  }

  ocultar(){
    this.mostrar=false;
  }


}
