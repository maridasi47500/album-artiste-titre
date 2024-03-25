import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MestitresPage } from './mestitres.page';

describe('MestitresPage', () => {
  let component: MestitresPage;
  let fixture: ComponentFixture<MestitresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MestitresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
