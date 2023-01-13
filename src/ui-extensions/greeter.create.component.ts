import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { GreeterService } from './greeter.service';

@Component({
  selector: 'greeter-create',
  templateUrl: './greeter.create.component.html',
})
export class GreeterCreateComponent {
  constructor(
    private readonly greeterService: GreeterService,
  ) {
  }

  isCreated = false;

  form = new FormGroup({
    mark: new FormControl(''),
    model: new FormControl(''),
  })

  async createCar () {
    await this.greeterService.createCar(this.form.value);
    this.form.reset();
    this.isCreated = true;
    setTimeout(() => {
      this.isCreated = false;
    }, 2000);
  }
}

