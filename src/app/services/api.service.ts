import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiBookResponse, ApiBooksListResponse, ApiLibrariesListResponse, Book, Library } from '../interfaces/api.interfaces';
import { BookMapper } from '../mappers/book.mapper';
import { LibraryMapper } from '../mappers/library.mapper';

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
    const headers = new HttpHeaders({Authorization: "Bearer"})

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
}
