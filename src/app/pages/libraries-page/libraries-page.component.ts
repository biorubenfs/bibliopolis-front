import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Library } from '../../interfaces/api.interfaces';
import { LibrariesListComponent } from "../../components/libraries-list/libraries-list.component";
import { LibraryMapper } from '../../mappers/library.mapper';

@Component({
  selector: 'app-libraries-page',
  imports: [LibrariesListComponent],
  templateUrl: './libraries-page.component.html',
})
export class LibrariesPageComponent {

  apiService = inject(ApiService)

  libraries = signal<Array<Library>>([])

  constructor() {

    // mock data
    const mockData = [
      {
        "id": "01J9W8VR2CFZW8PJ1Q8Y4Y5WEX",
        "name": "Ciencia ficción",
        "description": "Todos mis libros de ciencia ficción",
        "userId": "01J9BHWZ8N4B1JBSAFCBKQGERS",
        "books": [
          "01J9KKFQRP6H3F30CNT21G1DWT",
          "01J9KKFS6CKTSVY0ETH9A7PHXW",
          "01J9KKFTWAKVR1HGHCER50JJMQ"
        ],
        "createdAt": new Date("2025-06-26T17:00:58.685Z"),
        "updatedAt": new Date("2025-06-26T17:00:58.685Z")
      },
      {
        "id": "01JYPJYXXXN0RFKX9F9MP1Z9BM",
        "name": "Ensayo Historico",
        "description": "Todo ensayo histórico",
        "userId": "01J9BHWZ8N4B1JBSAFCBKQGERS",
        "books": [],
        "createdAt": new Date("2025-06-26T17:00:58.685Z"),
        "updatedAt": new Date("2025-06-26T17:00:58.685Z")
      },
      {
        "id": "01JYPJZ37ZG9TK859P4K05K2T1",
        "name": "2024",
        "description": "Todos los libros que leí en el año 2024",
        "userId": "01J9BHWZ8N4B1JBSAFCBKQGERS",
        "books": [],
        "createdAt": new Date("2025-06-26T17:00:58.685Z"),
        "updatedAt": new Date("2025-06-26T17:00:58.685Z")
      },
      {
        "id": "01JYPJZ37ZG9TK859P4K05K2T1",
        "name": "Pendientes de leer",
        "description": "Algunos de los libros que tengo pendientes de leer",
        "userId": "01J9BHWZ8N4B1JBSAFCBKQGERS",
        "books": [],
        "createdAt": new Date("2025-06-26T17:00:58.685Z"),
        "updatedAt": new Date("2025-06-26T17:00:58.685Z")
      }
    ]
    this.libraries.set(mockData)

    // this.apiService.getUserLibraries()
    //   .subscribe({
    //     next: (libraries) => {
    //       this.libraries.set(libraries)
    //       console.log(this.libraries())
    //     }
    //   })

  }

}
