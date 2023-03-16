import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAufgabeComponent } from './main-aufgabe.component';

describe('MainAufgabeComponent', () => {
  let component: MainAufgabeComponent;
  let fixture: ComponentFixture<MainAufgabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAufgabeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAufgabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
