import { Injectable } from '@nestJs/common'
import { EntityManager } from 'typeorm'
import { Car } from './car.entity';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions'

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

  async deleteCar(id: number) {
    return this.entityManager.delete(Car, id)
  }
}
