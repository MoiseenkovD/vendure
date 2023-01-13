import { Component, OnInit } from '@angular/core';
import { GreeterService } from './greeter.service';

@Component({
  selector: 'greeter',
  templateUrl: './greeter.component.html',
})
export class GreeterComponent implements OnInit {
  greeting = 'Hello!';
  author = 'Ed';
  cars = [];

  constructor(
    private readonly greeterService: GreeterService,
  ) {}

  ngOnInit() {
    this.getCars()
  }

  sayHi() {
    console.log('hi')
  }

  async getCars() {
    this.cars = await this.greeterService.getCars();
  }

  async deleteCar(id: number) {
    await this.greeterService.deleteCar(id);
    this.getCars();
  }
}
