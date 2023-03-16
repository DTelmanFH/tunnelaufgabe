import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfallEingabeComponent } from './unfall-eingabe.component';

describe('UnfallEingabeComponent', () => {
  let component: UnfallEingabeComponent;
  let fixture: ComponentFixture<UnfallEingabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnfallEingabeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnfallEingabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
