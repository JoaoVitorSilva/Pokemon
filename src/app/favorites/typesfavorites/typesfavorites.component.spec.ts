import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesfavoritesComponent } from './typesfavorites.component';

describe('TypesfavoritesComponent', () => {
  let component: TypesfavoritesComponent;
  let fixture: ComponentFixture<TypesfavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesfavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesfavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
