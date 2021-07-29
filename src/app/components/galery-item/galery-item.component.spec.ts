import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryItemComponent } from './galery-item.component';

describe('GaleryItemComponent', () => {
  let component: GaleryItemComponent;
  let fixture: ComponentFixture<GaleryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
