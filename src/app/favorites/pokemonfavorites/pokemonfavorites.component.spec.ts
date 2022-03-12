import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonfavoritesComponent } from './pokemonfavorites.component';

describe('PokemonfavoritesComponent', () => {
  let component: PokemonfavoritesComponent;
  let fixture: ComponentFixture<PokemonfavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonfavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonfavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
