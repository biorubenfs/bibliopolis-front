interface ApiBookAttributes {
  title: string
  authors: Array<string>
  isbn_13: string
  coverUrl: string
  createdAt: Date
  updatedAt: Date
}

export interface ApiBookEntity {
  type: 'books',
  id: string
  attributes: ApiBookAttributes
}

export interface ApiBookResponse {
  results: Array<ApiBookEntity>
  paginatinIndo: unknown
}

export interface Book extends ApiBookAttributes {
  id: string,
}