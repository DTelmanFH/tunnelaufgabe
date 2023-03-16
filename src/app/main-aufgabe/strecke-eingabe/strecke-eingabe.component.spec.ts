import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreckeEingabeComponent } from './strecke-eingabe.component';

describe('StreckeEingabeComponent', () => {
  let component: StreckeEingabeComponent;
  let fixture: ComponentFixture<StreckeEingabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreckeEingabeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreckeEingabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
