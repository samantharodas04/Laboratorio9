import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal.model';
import { AnimalService } from '../animal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css',
})
export class ListadoComponent implements OnInit {
  animales: Animal[] = [];
  animalEditando: Animal | null = null;
  mostrarFormularioEdicion = false;

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animales = this.animalService.obtenerAnimales();
    this.animalService.animales$.subscribe((animales) => {
      this.animales = animales;
    });
  }

  editar(id: number) {
    this.animalEditando =
      this.animales.find((animal) => animal.id === id) || null;
    this.mostrarFormularioEdicion = true;
  }

  guardarEdicion() {
    if (this.animalEditando) {
      this.animalService.actualizarAnimal(this.animalEditando);
      this.animalEditando = null;
      this.mostrarFormularioEdicion = false;
    }
  }

  cancelarEdicion() {
    this.animalEditando = null;
    this.mostrarFormularioEdicion = false;
  }

  borrar(id: number) {
    this.animalService.eliminarAnimal(id);
  }
}
