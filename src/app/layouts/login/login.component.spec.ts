import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiUserEntity, EntityType } from '../../interfaces/api.interfaces';
import { UserMapper } from '../../mappers/user.mapper';

describe('LoginComponent (standalone)', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['login']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [LoginComponent], // 👈 Importamos el standalone directamente
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        { provide: Router, useValue: routerSpy },
        importProvidersFrom(CommonModule, HttpClientModule),
        provideRouter([]), // evita errores por falta de rutas
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login API and navigate on success', fakeAsync(() => {
    // Arrange
    const apiUserEntityMocked: ApiUserEntity = {
      id: 'asdasd',
      type: EntityType.User,
      attributes: {
        name: 'test',
        createdAt: new Date(),
        email: 'test@example.com',
        role: 'regular',
        updatedAt: new Date()
      }
    }

    const user = UserMapper.apiUserToUser(apiUserEntityMocked)


    component.email.set('test@example.com');
    component.password.set('123456');
    apiServiceSpy.login.and.returnValue(of(user));

    // Act
    component.login();
    tick();

    // Assert
    expect(apiServiceSpy.login).toHaveBeenCalledWith('test@example.com', '123456');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['libraries']);
  }));
});
