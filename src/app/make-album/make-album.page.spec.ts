import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakeAlbumPage } from './make-album.page';

describe('MakeAlbumPage', () => {
  let component: MakeAlbumPage;
  let fixture: ComponentFixture<MakeAlbumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MakeAlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
