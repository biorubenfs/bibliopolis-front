import { ApiLibraryEntity, Library } from "../interfaces/api.interfaces"

export class LibraryMapper {
  static apiLibraryToLibrary(library: ApiLibraryEntity): Library {
    return {
      id: library.id,
      ...library.attributes,
      createdAt: new Date(library.attributes.createdAt),
      updatedAt: new Date(library.attributes.updatedAt)
    }
  }

  static apiLibrariesToLibraries(libraries: Array<ApiLibraryEntity>): Array<Library> {
    return libraries.map(library => this.apiLibraryToLibrary(library))
  }
}