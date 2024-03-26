import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoirAlbumPage } from './voir-album.page';

describe('VoirAlbumPage', () => {
  let component: VoirAlbumPage;
  let fixture: ComponentFixture<VoirAlbumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VoirAlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
