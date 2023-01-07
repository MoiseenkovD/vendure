import { Controller, Get, Param, ParseIntPipe, NotFoundException, Post, Put, Delete } from '@nestjs/common';
import { awaitPromiseOrObservable, Ctx, RequestContext } from '@vendure/core';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  getAllCars(@Ctx() ctx: RequestContext) {
    return this.carsService.getAllCars({});
  }

  @Get(':id')
  async getCarsById(@Param('id', ParseIntPipe) id: number) {
    const car = await this.carsService.getCarsById(id);

    if (!car) {
      throw new NotFoundException(`car with id ${id} not found`)
    }

    return car;
  }

  @Post()
  async createCar() {}

  @Put(':id')
  async updateCar() {}

  @Delete(':id')
  async deleteCar(@Param('id', ParseIntPipe) id: number){
    const car = await this.carsService.getCarsById(id);

    if (!car) {
      throw new NotFoundException(`car with id ${id} not found`)
    }

    await this.carsService.deleteCar(id)

    return car
  }

}
