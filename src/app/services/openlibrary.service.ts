import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

function buildUrl(isbn: string) {
  return `https://openlibrary.org/isbn/${isbn}.json`
}

interface OpenLibraryBook {
  title: string
  covers: Array<number>
  isbn_13: Array<string>
}

@Injectable({
  providedIn: 'root'
})
export class OpenLibraryService {
  private http = inject(HttpClient)

  getBookByIsbn(isbn: string): Observable<OpenLibraryBook> {
    return this.http
      .get<OpenLibraryBook>(buildUrl(isbn))
      .pipe(
        catchError((error) => {
          console.log(error)
          return throwError(() => new Error('cannot fetch book from open library'))
        })
      )
  }
}
