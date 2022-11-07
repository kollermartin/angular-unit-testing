import { UsersService } from './../../../services/users/users.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from '../users.component';
import { of } from 'rxjs';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  let usersServiceMock: any = {
    getUsers: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [{ provide: UsersService, useValue: usersServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Users default value is empty array', () => {
    expect(component.users.length).toBe(0);
  });

  it('Should initialize users', () => {
    const users = [
      {
        name: 'Karel',
        company: 'KBC',
      },
      {
        name: 'Ricardo',
        company: 'BBC',
      },
    ];
    expect(component.users.length).toBe(0);

    jest.spyOn(usersServiceMock, 'getUsers').mockReturnValue(of(users));

    fixture.detectChanges();

    expect(component.users.length).toBe(2);
  });

  it('Should set message to no users', () => {
    const users: any[] = [];

    jest.spyOn(usersServiceMock, 'getUsers').mockReturnValue(of(users));

    fixture.detectChanges();

    expect(component.message).toBe('No users');
  });

  it('Should set message to few users', () => {
    const users = [
      {
        name: 'Karel',
        company: 'KBC',
      },
      {
        name: 'Ricardo',
        company: 'BBC',
      },
    ];

    jest.spyOn(usersServiceMock, 'getUsers').mockReturnValue(of(users));

    fixture.detectChanges();

    expect(component.message).toBe('Few users');
  });

  it('Should set message to So many users', () => {
    const users = [
      {
        name: 'Karel',
        company: 'KBC',
      },
      {
        name: 'Ricardo',
        company: 'BBC',
      },
      {
        name: 'Ricardo',
        company: 'BBC',
      },
    ];

    jest.spyOn(usersServiceMock, 'getUsers').mockReturnValue(of(users));

    fixture.detectChanges();

    expect(component.message).toBe('So many users');
  });
});
