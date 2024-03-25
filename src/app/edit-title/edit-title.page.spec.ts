import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTitlePage } from './edit-title.page';

describe('EditTitlePage', () => {
  let component: EditTitlePage;
  let fixture: ComponentFixture<EditTitlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditTitlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
