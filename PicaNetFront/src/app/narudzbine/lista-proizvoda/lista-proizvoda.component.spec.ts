import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProizvodaComponent } from './lista-proizvoda.component';

describe('ListaProizvodaComponent', () => {
  let component: ListaProizvodaComponent;
  let fixture: ComponentFixture<ListaProizvodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProizvodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProizvodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
