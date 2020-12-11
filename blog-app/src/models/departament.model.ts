import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Departament extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  type: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Departament>) {
    super(data);
  }
}

export interface DepartamentRelations {
  // describe navigational properties here
}

export type DepartamentWithRelations = Departament & DepartamentRelations;
