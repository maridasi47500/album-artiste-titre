import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditArtistPage } from './edit-artist.page';

describe('EditArtistPage', () => {
  let component: EditArtistPage;
  let fixture: ComponentFixture<EditArtistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditArtistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
