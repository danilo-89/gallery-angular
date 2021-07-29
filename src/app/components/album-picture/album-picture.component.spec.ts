import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPictureComponent } from './album-picture.component';

describe('AlbumPictureComponent', () => {
  let component: AlbumPictureComponent;
  let fixture: ComponentFixture<AlbumPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
