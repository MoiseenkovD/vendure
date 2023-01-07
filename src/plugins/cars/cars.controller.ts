import { Controller, Get, Param, ParseIntPipe, NotFoundException, Post, Put, Delete , Body} from '@nestjs/common';
import { awaitPromiseOrObservable, Ctx, RequestContext } from '@vendure/core';
import { CarsService } from './cars.service';
import { CarDto } from './dto/car-dto';

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
  async createCar(@Body() carDto: CarDto) {
    return this.carsService.createCar(carDto);
  }

  @Put(':id')
  async updateCar(@Param('id', ParseIntPipe) id: number, @Body() carDto: CarDto) {
    const car = await this.carsService.getCarsById(id);

    if (!car) {
      throw new NotFoundException(`car with id ${id} not found`)
    }

    return this.carsService.updateCar(id, carDto)
  }

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
