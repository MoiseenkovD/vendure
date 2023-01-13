import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GreeterService {
  constructor(private httpClient: HttpClient) {}

  getCars(): Promise<any> {
    return this.httpClient.get('/cars').toPromise();
  }

  createCar(car: any) {
    return this.httpClient.post('/cars', car).toPromise()
  }

  updateCar(id: number, car: any) {
    return this.httpClient.put(`/cars/${id}`, car).toPromise()
  }

  deleteCar(id: number) {
    return this.httpClient.delete(`/cars/${id}`).toPromise();
  }

}
