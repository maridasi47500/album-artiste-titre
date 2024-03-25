import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakeTitlePage } from './make-title.page';

describe('MakeTitlePage', () => {
  let component: MakeTitlePage;
  let fixture: ComponentFixture<MakeTitlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MakeTitlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
