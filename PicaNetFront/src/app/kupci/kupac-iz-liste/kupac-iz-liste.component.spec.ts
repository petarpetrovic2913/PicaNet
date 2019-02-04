import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacIzListeComponent } from './kupac-iz-liste.component';

describe('KupacIzListeComponent', () => {
  let component: KupacIzListeComponent;
  let fixture: ComponentFixture<KupacIzListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KupacIzListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KupacIzListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
