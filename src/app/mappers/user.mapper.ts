import { ApiUserEntity, User } from "../interfaces/api.interfaces";

export class UserMapper {
  static apiUserToUser(user: ApiUserEntity): User {
    return {
      id: user.id,
      ...user.attributes
    }
  }
}