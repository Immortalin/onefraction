import { ModelType } from 'typegoose'
import UserModal, { User } from './UserEntity'

export class UserService {
  private readonly modal: ModelType<User>

  constructor() {
    this.modal = UserModal
  }

  async find(selector?: Partial<User>) {
    return this.modal.find(selector)
  }

  async findOneById(_id: string) {
    return this.modal.findOne({ _id })
  }

  async remove(_id: string) {
    let entityToRemove = await this.modal.findOne(_id)
    await this.modal.remove(entityToRemove)
  }

  async count(entity: any) {
    return this.modal.count(entity)
  }
}
