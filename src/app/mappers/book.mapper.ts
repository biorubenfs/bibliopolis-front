import { ApiBookEntity, Book } from "../interfaces/api.interfaces";

export class BookMapper {
  static apiBookToBook(book: ApiBookEntity): Book {
    return {
      id: book.id,
      ...book.attributes
    }
  }

  static apiBooksToBooks(books: Array<ApiBookEntity>): Array<Book> {
    return books.map(book => this.apiBookToBook(book))
  }
}