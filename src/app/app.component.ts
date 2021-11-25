import { Persona } from './persona.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Personas';
  personas: Persona[] = [new Persona("Juan", "Perez"), new Persona("Laura", "Juarez")];
  nombreInput!: string;
  apellidoInput!: string;

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);
  }
}
