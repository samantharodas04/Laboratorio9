import { Component } from '@angular/core';
import { Animal } from '../models/animal.model';
import { AnimalService } from '../animal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  nombre: string = '';
  raza: string = '';

  constructor(private animalService: AnimalService) {}

  guardar(): void {
    if (this.nombre.trim() && this.raza.trim()) {
      const nuevoAnimal = new Animal(
        Math.floor(Math.random() * 1000),
        this.nombre,
        this.raza
      );
      this.animalService.agregarAnimal(nuevoAnimal);
      this.nombre = '';
      this.raza = '';
    }
  }
}
