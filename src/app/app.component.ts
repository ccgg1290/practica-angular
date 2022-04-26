import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'Listado de empleados';
  
  empleados:Empleado[]=[
 
     new Empleado("claudi","rincon","presidente",7500),
     new Empleado("ginna","meneses","presidente",8000),
     new Empleado("sara","urrego","presidente",9000),
     new Empleado("sofia","martinez","presidente",7700),
    
  ];

  agregarEmpleado(){

    let miEmpleado= new Empleado(this. cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleados.push(miEmpleado)

  }


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;


}
