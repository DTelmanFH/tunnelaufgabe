import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabenstellungComponent } from './aufgabenstellung.component';

describe('AufgabenstellungComponent', () => {
  let component: AufgabenstellungComponent;
  let fixture: ComponentFixture<AufgabenstellungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AufgabenstellungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AufgabenstellungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
