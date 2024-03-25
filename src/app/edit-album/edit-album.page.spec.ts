import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditAlbumPage } from './edit-album.page';

describe('EditAlbumPage', () => {
  let component: EditAlbumPage;
  let fixture: ComponentFixture<EditAlbumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditAlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
