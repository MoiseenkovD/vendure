import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import {ActivatedRoute} from '@angular/router';
import { GreeterService } from './greeter.service';


@Component({
  selector: 'greeter-update',
  templateUrl: './greeter-update.component.html',
})
export class GreeterUpdateComponent implements OnInit{
  constructor(
    private readonly greeterService: GreeterService,
    private readonly route: ActivatedRoute,
  ) {
  }

  id = 0;

  ngOnInit () {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
    });
  }

  isUpdated = false;

  form = new FormGroup({
    mark: new FormControl(''),
    model: new FormControl(''),
  })

  sayHi() {
    console.log(this.form.value)
  }

  async updateCar () {
    await this.greeterService.updateCar(this.id, this.form.value);
    this.form.reset();
    this.isUpdated = true;
    setTimeout(() => {
      this.isUpdated = false;
    }, 2000);
  }
}
