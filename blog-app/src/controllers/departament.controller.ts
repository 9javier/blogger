import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Departament} from '../models';
import {DepartamentRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';

@authenticate('jwt')
export class DepartamentController {
  constructor(
    @repository(DepartamentRepository)
    public departamentRepository : DepartamentRepository,
  ) {}

  @post('/api-departament', {
    responses: {
      '200': {
        description: 'Departament model instance',
        content: {'application/json': {schema: getModelSchemaRef(Departament)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Departament, {
            title: 'NewDepartament',
            exclude: ['id'],
          }),
        },
      },
    })
    departament: Omit<Departament, 'id'>,
  ): Promise<Departament> {
    return this.departamentRepository.create(departament);
  }

  @get('/api-departament/count', {
    responses: {
      '200': {
        description: 'Departament model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Departament) where?: Where<Departament>,
  ): Promise<Count> {
    return this.departamentRepository.count(where);
  }

  @get('/api/departament', {
    responses: {
      '200': {
        description: 'Array of Departament model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Departament, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Departament) filter?: Filter<Departament>,
  ): Promise<Departament[]> {
    return this.departamentRepository.find(filter);
  }

  @patch('/api-departament', {
    responses: {
      '200': {
        description: 'Departament PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Departament, {partial: true}),
        },
      },
    })
    departament: Departament,
    @param.where(Departament) where?: Where<Departament>,
  ): Promise<Count> {
    return this.departamentRepository.updateAll(departament, where);
  }

  @get('/api/departament/{id}', {
    responses: {
      '200': {
        description: 'Departament model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Departament, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Departament, {exclude: 'where'}) filter?: FilterExcludingWhere<Departament>
  ): Promise<Departament> {
    return this.departamentRepository.findById(id, filter);
  }

  @patch('/api-departament/{id}', {
    responses: {
      '204': {
        description: 'Departament PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Departament, {partial: true}),
        },
      },
    })
    departament: Departament,
  ): Promise<void> {
    await this.departamentRepository.updateById(id, departament);
  }

  @put('/api-departament/{id}', {
    responses: {
      '204': {
        description: 'Departament PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() departament: Departament,
  ): Promise<void> {
    await this.departamentRepository.replaceById(id, departament);
  }

  @del('/api-departament/{id}', {
    responses: {
      '204': {
        description: 'Departament DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.departamentRepository.deleteById(id);
  }
}
