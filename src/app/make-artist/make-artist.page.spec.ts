import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakeArtistPage } from './make-artist.page';

describe('MakeArtistPage', () => {
  let component: MakeArtistPage;
  let fixture: ComponentFixture<MakeArtistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MakeArtistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
