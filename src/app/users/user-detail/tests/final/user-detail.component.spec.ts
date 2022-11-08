import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from '../../user-detail.component';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return name from given data', () => {
    component.data = { name: 'Pepa', surname: 'Kokos' };

    const result = component.returnNameFromGivenData();

    expect(result).toBe('Pepa');
  });

  it('Should initialize fullname', () => {
    component.data = { name: 'Pepa', surname: 'Kokos' };

    fixture.detectChanges();

    expect(component.fullname).toBe('Pepa Kokos');
  });
});
