import { Injectable } from '@nestJs/common'
import { EntityManager } from 'typeorm'
import { Car } from './car.entity';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions'
import { CarsCreateDto } from './dto/cars-create-dto';

export interface IGetAllCars {
  mark?: string;
}

@Injectable()
export class CarsService {
  constructor(private entityManager: EntityManager) {}

  async getAllCars(args: IGetAllCars): Promise<Car[]> {
    let options: FindManyOptions<Car> = {}

    if (args.mark) {
      options = {
        where: {
          mark: args.mark
        }
      };
    }

    return this.entityManager.find(Car, options);
  }

  async getCarsById(id: number) {
    return this.entityManager.findOne(Car, id)
  }

  async createCar(carDto: CarsCreateDto) {
    return this.entityManager.save(Car, carDto)
  }

  async updateCar(id: number, carDto: CarsCreateDto) {
    await this.entityManager.update(Car, {id: id}, carDto)
    return this.getCarsById(id);
  }

  async deleteCar(id: number) {
    return this.entityManager.delete(Car, id)
  }
}
