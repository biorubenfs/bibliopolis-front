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
      .get<ApiBooksListResponse>(`${API_URL}/books`)
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
      .get<ApiBookResponse>(`${API_URL}/books/${id}`)
      .pipe(
        map((res) => BookMapper.apiBookToBook(res.results)),
        catchError((error) => {
          console.log(error)
          return throwError(() => new Error('cannot fetch books'))
        })
      )
  }

  getUserLibraries(): Observable<Array<Library>> {
    const headers = new HttpHeaders({Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxSjlCSFdaOE40QjFKQlNBRkNCS1FHRVJTIiwicm9sZSI6InJlZ3VsYXIiLCJpYXQiOjE3NTA5Nzg0MjQsImV4cCI6MTc1MTAzODQyNH0.ouB1gB2xSizsjk0c14p8blEPg4X_6srnZjAQBjAKHJk"})

    return this.http
      .get<ApiLibrariesListResponse>(`${API_URL}/libraries`, {headers})
      .pipe(
        map((res) => LibraryMapper.apiLibrariesToLibraries(res.results)),

        catchError((error) => {
          console.log(error)
          return throwError(() => new Error('cannot fetch libraries'))
        })
      )
  }

  getLibraryById(id: string): Observable<Library> {
    const headers = new HttpHeaders({Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxSjlCSFdaOE40QjFKQlNBRkNCS1FHRVJTIiwicm9sZSI6InJlZ3VsYXIiLCJpYXQiOjE3NTA5Nzg0MjQsImV4cCI6MTc1MTAzODQyNH0.ouB1gB2xSizsjk0c14p8blEPg4X_6srnZjAQBjAKHJk"})

    return this.http
      .get<ApiLibraryResponse>(`${API_URL}/libraries/${id}`, {headers})
      .pipe(
        map((res) => LibraryMapper.apiLibraryToLibrary(res.results)),

        catchError((error) => {
          console.log(error)
          return throwError(() => new Error('cannot fetch library'))
        })
      )
  }

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<ApiUserResponse>(`${API_URL}/auth/login`, { email, password })
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
      .post(`${API_URL}/logout`, {})
      .pipe(
        catchError((error) => {
          console.log(error)
          return throwError(() => new Error('cannot do logout'))
        })
      )
  }
}
