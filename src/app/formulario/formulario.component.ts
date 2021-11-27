import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombreInput!: string;
  apellidoInput!: string;

  constructor(private loggingService:LoggingService,
              private personasService:PersonasService ) {
                this.personasService.saludar.subscribe(
                  (indice: number) => alert("El indice es: " + indice)
                );
               }

  ngOnInit(): void {
  }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personasService.agregarPersona(persona1);
  }

}
