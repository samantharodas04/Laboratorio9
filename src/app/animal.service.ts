import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Animal } from './models/animal.model';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private _animales: BehaviorSubject<Animal[]> = new BehaviorSubject<Animal[]>(
    []
  );
  public animales$ = this._animales.asObservable();

  constructor() {}

  public agregarAnimal(animal: Animal) {
    const animales = this._animales.getValue();
    animales.push(animal);
    this._animales.next(animales);
  }

  public eliminarAnimal(id: number) {
    const animales = this._animales.getValue();
    const index = animales.findIndex((animal) => animal.id === id);
    animales.splice(index, 1);
    this._animales.next(animales);
  }

  public actualizarAnimal(animal: Animal) {
    const animales = this._animales.getValue();
    const index = animales.findIndex((a) => a.id === animal.id);
    animales[index] = animal;
    this._animales.next(animales);
  }

  public obtenerAnimales() {
    return this._animales.getValue();
  }
}
