import {DefaultCrudRepository} from '@loopback/repository';
import {Departament, DepartamentRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DepartamentRepository extends DefaultCrudRepository<
  Departament,
  typeof Departament.prototype.id,
  DepartamentRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Departament, dataSource);
  }
}
