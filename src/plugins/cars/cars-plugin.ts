import { VendurePlugin } from '@vendure/core';
import gql from 'graphql-tag';
import { Car } from './car.entity'
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CarsResolver } from './cars.resolver'

const schemaExtension = gql`
	type Car implements Node {
		id: ID!
		createdAt: DateTime!
		updatedAt: DateTime!
		mark: String!
		model: String!
	}

  extend type Query {
    cars(mark: String): [Car!]!
  }
`

@VendurePlugin({
	entities: [Car],
	controllers: [CarsController],
	providers: [CarsService],
	shopApiExtensions: {
		schema: schemaExtension,
		resolvers: [CarsResolver]
	}
})
export class CarsPlugin{}

