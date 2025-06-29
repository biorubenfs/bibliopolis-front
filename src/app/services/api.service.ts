import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiBookResponse, ApiBooksListResponse, ApiLibrariesListResponse, ApiLibraryResponse, ApiUserResponse, Book, Library, User } from '../interfaces/api.interfaces';
import { BookMapper } from '../mappers/book.mapper';
import { LibraryMapper } from '../mappers/library.mapper';
import { UserMapper } from '../mappers/user.mapper';

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

  createLibrary(): Observable<Library> {
    const mockBody = {name: `new-library${Math.round(Math.random() * 100)}`, description: "created from frontend"}

    return this.http
      .post<Library>(`${API_URL}/libraries`, mockBody , { withCredentials: true })
      .pipe(
        catchError((error) => {
          console.log(error)
          return throwError(() => new Error('cannot create library'))
        })
      )

  }

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<ApiUserResponse>(`${API_URL}/auth/login`, { email, password }, {withCredentials: true})
      .pipe(
        map((res) => UserMapper.apiUserToUser(res.results)),
        catchError((error) => {
          console.log(error)
          return throwError(() => new Error('cannot do login'))
        })
      )
  }

  logout() {
    return this.http
      .post(`${API_URL}/logout`, {}, {withCredentials: true})
      .pipe(
        catchError((error) => {
          console.log(error)
          return throwError(() => new Error('cannot do logout'))
        })
      )
  }
}
