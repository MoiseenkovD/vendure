import { Args, Query, Resolver } from '@nestjs/graphql';
import { Ctx, RequestContext } from '@vendure/core'
import { CarsService, IGetAllCars } from './cars.service';

@Resolver()
export class CarsResolver {

  constructor(private carsService: CarsService) {}

  @Query()
  cars(@Ctx() ctx: RequestContext, @Args() args: IGetAllCars) {
    return this.carsService.getAllCars(args)
  }

}
