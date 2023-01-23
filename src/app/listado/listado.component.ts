import { Component } from '@angular/core';
import { Estudiante } from '../interfaces/estudiante.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  estudiantes: Estudiante[] = [
    {
      nombres: 'Juan'
      ,promedio: 9.5
    }
    ,{
      nombres: 'Luis'
      ,promedio: 9.2
    }
    ,{
      nombres: 'Carlota'
      ,promedio: 8.78
    }
    ,{
      nombres: 'Daniela'
      ,promedio: 7.5
    }
    ,{
      nombres: 'Pedro'
      ,promedio: 6.5
    }
    ,{
      nombres: 'Mario'
      ,promedio: 3.82
    }
  ]

  nuevo: Estudiante = {
    nombres: ''
    ,promedio: 0
  }

  get listaestudiantes(){
    return this.estudiantes
  }
  
  resultado(estudiante: Estudiante): string{
    let valor = '';

    if ( estudiante.promedio < 4 )
      valor = 'REPROBADO';
    else{
      if ( estudiante.promedio < 7 )
        valor = 'SUSPENSO';
      else
        valor = 'APROBADO';
    }

    return valor;
  }

  agregar(): void{
    if (this.nuevo.nombres.trim().length === 0 || this.nuevo.promedio < 0 || this.nuevo.promedio > 10)
      return ;
    
    this.estudiantes.push(this.nuevo);

    this.nuevo = {
      nombres: ''
      ,promedio: 0
    };
  }

  calcularPromedioLista(): number{
    let acum = 0;

    this.estudiantes.forEach(function(estudiante: Estudiante){
      acum += estudiante.promedio;
    });

    return acum/(this.estudiantes.length > 0 ? this.estudiantes.length : 1);
  }

  ordenar(): Estudiante[]{
    let tempEstudiante = [...this.estudiantes];
    let auxEstudiante: Estudiante;
    let i = 0, j = 1;

    for( i = 0; i < tempEstudiante.length; i++){
      for ( j = i +1; j < tempEstudiante.length; j++){
        if ( tempEstudiante[i].promedio < tempEstudiante[j].promedio ){
          auxEstudiante = tempEstudiante[i];
          tempEstudiante[i] = tempEstudiante[j];
          tempEstudiante[j] = auxEstudiante;
        }
      }
    }

    return tempEstudiante;
  }
}
