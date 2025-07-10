export enum EntityType {
  Book = 'books',
  Library = 'libraries',
  User = 'user',
  UserBook = 'user-books'
}

interface PaginationInfo {
  skip: number
  limit: number
  total: number
}

interface ApiBookAttributes {
  title: string
  authors: Array<string>
  isbn_13: string
  coverUrl: string
  createdAt: Date
  updatedAt: Date
}

interface ApiLibraryAttributes {
  name: string
  description: string
  userId: string
  books: Array<string>
  createdAt: Date
  updatedAt: Date
}

export interface ApiUserAttributes {
  name: string
  email: string
  role: string
  createdAt: Date
  updatedAt: Date
}

export interface ApiUserBookAttributes {
  bookId: string
  libraries: Array<string>
  userId: string
  bookTitle: string
  bookAuthors: Array<string>
  bookCover: number
  bookIsbn: string
  notes: string
  rating: number
  createdAt: Date
  updatedAt: Date
}

type ApiEntity<EntityType, T> = {
  type: EntityType
  id: string
  attributes: T
}

export type ApiBookEntity = ApiEntity<EntityType.Book, ApiBookAttributes>
export type ApiLibraryEntity = ApiEntity<EntityType.Library, ApiLibraryAttributes>
export type ApiUserEntity = ApiEntity<EntityType.User, ApiUserAttributes>
export type ApiUserBookEntity = ApiEntity<EntityType.UserBook, ApiUserBookAttributes>

/* API responses */
/* BOOKS */
export interface ApiBooksListResponse {
  results: Array<ApiBookEntity>
  paginationInfo: PaginationInfo
}

export interface ApiBookResponse {
  results: ApiBookEntity
}

export interface Book extends ApiBookAttributes {
  id: string,
}

/* LIBRARIES */
export interface ApiLibrariesListResponse {
  results: Array<ApiLibraryEntity>
  paginationInfo: PaginationInfo
}

export interface ApiLibraryResponse {
  results: ApiLibraryEntity
}

export interface Library extends ApiLibraryAttributes {
  id: string
}

/* User */
export interface ApiUserResponse {
  results: ApiUserEntity
}

export interface User extends ApiUserAttributes {
  id: string
}

/* UserBooks */
export interface ApiUserBooksListResponse  {
  results: Array<ApiUserBookEntity>
  paginationInfo: PaginationInfo
}

export interface UserBook extends ApiUserBookAttributes {
  id: string
}

