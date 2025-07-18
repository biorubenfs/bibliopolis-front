import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiBookResponse, ApiBooksListResponse, ApiLibrariesListResponse, ApiLibraryResponse, ApiUserBookResponse, ApiUserBooksListResponse, ApiUserResponse, Book, Library, User, UserBook } from '../interfaces/api.interfaces';
import { BookMapper } from '../mappers/book.mapper';
import { LibraryMapper } from '../mappers/library.mapper';
import { UserMapper } from '../mappers/user.mapper';
import { UserBookMapper } from '../mappers/user-book.mapper';

const API_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient)

  getLastAddedBooks(): Observable<Array<Book>> {
    return this.http
      .get<ApiBooksListResponse>(`${API_URL}/books`, { withCredentials: true })
      .pipe(
        map((res) => BookMapper.apiBooksToBooks(res.results)),
        catchError((error) => {
          console.log(error)
          return throwError(() => new Error('cannot fetch books'))
        })
      )
  }

  getBookById(id: string): Observable<Book> {
    return this.http
      .get<ApiBookResponse>(`${API_URL}/books/${id}`, { withCredentials: true })
      .pipe(
        map((res) => BookMapper.apiBookToBook(res.results)),
        catchError((error) => {
          console.log(error)
          return throwError(() => new Error('cannot fetch books'))
        })
      )
  }

  getUserLibraries(): Observable<Array<Library>> {
    return this.http
      .get<ApiLibrariesListResponse>(`${API_URL}/libraries`, { withCredentials: true })
      .pipe(
        map((res) => LibraryMapper.apiLibrariesToLibraries(res.results)),

        catchError((error) => {
          console.log(error)
          return throwError(() => new Error('cannot fetch libraries'))
        })
      )
  }

  getLibraryById(id: string): Observable<Library> {
    return this.http
      .get<ApiLibraryResponse>(`${API_URL}/libraries/${id}`, { withCredentials: true })
      .pipe(
        map((res) => LibraryMapper.apiLibraryToLibrary(res.results)),

        catchError((error) => {
          console.log(error)
          return throwError(() => new Error('cannot fetch library'))
        })
      )
  }

  deleteLibraryById(id: string): Observable<void> {
    return this.http
      .delete<void>(`${API_URL}/libraries/${id}`, { withCredentials: true })
      .pipe(
        catchError((error) => {
          console.log(error)
          return throwError(() => new Error('cannot delete library'))
        })
      )
  }

  createLibrary(name: string, description: string): Observable<Library> {
    const body = { name, description }

    return this.http
      .post<Library>(`${API_URL}/libraries`, body, { withCredentials: true })
      .pipe(
        catchError((error) => {
          console.log(error)
          return throwError(() => new Error('cannot create library'))
        })
      )
  }
  
  addBookToLibrary(libraryId: string, isbn: string): Observable<void> {
    return this.http
      .post<void>(`${API_URL}/libraries/${libraryId}/books`, { isbn }, { withCredentials: true })
      .pipe(
        catchError((error) => {
          console.log(error)
          return throwError(() => new Error('cannot get user books'))
        })
      )
  }

  getLibraryBooks(id: string): Observable<Array<UserBook>> {
    return this.http
      .get<ApiUserBooksListResponse>(`${API_URL}/libraries/${id}/books`, { withCredentials: true })
      .pipe(
        map((res) => UserBookMapper.apiUserBooksToUserBooks(res.results)),
        catchError((error) => {
          console.log(error)
          return throwError(() => new Error(`cannot get user books of library ${id}`))
        })
      )
  }

  deleteLibraryBook(libraryId: string, userBookId: string): Observable<void> {
    return this.http
      .delete<void>(`${API_URL}/libraries/${libraryId}/books/${userBookId}`, { withCredentials: true })
      .pipe(
        catchError((error) => {
          console.log(error)
          return throwError(() => new Error('cannot get user books'))
        })
      )
  }

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<ApiUserResponse>(`${API_URL}/auth/login`, { email, password }, { withCredentials: true })
      .pipe(
        map((res) => UserMapper.apiUserToUser(res.results)),
        catchError((error) => {
          console.log(error)
          return throwError(() => new Error('cannot do login'))
        })
      )
  }

  logout(): Observable<void> {
    return this.http
      .post<void>(`${API_URL}/auth/logout`, {}, { withCredentials: true })
      .pipe(
        catchError((error) => {
          console.log(error)
          return throwError(() => new Error('cannot do logout'))
        })
      )
  }
}
