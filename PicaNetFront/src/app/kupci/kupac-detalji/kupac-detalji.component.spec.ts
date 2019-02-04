import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacDetaljiComponent } from './kupac-detalji.component';

describe('KupacDetaljiComponent', () => {
  let component: KupacDetaljiComponent;
  let fixture: ComponentFixture<KupacDetaljiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KupacDetaljiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KupacDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
