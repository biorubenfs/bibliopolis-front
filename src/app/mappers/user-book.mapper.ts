import { ApiUserBookEntity, UserBook } from "../interfaces/api.interfaces";

export class UserBookMapper {
  static apiUserBookToUserBook(userBook: ApiUserBookEntity): UserBook {
    return {
      id: userBook.id,
      ...userBook.attributes
    }
  }

  static apiUserBooksToUserBooks(userBooks: Array<ApiUserBookEntity>): Array<UserBook> {
    return userBooks.map(userBook => this.apiUserBookToUserBook(userBook))
  }
}