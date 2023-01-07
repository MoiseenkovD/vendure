import { DeepPartial } from '@vendure/common/lib/shared-types';
import { VendureEntity } from '@vendure/core';
import { Column, Entity } from 'typeorm';

@Entity("cars")
export class Car extends VendureEntity {
  constructor(input?: DeepPartial<Car>) {
    super(input);
  }

  @Column()
  mark: string;

  @Column()
  model: string;

}

