import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseauxComponent } from './reseaux.component';

describe('ReseauxComponent', () => {
  let component: ReseauxComponent;
  let fixture: ComponentFixture<ReseauxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReseauxComponent]
    });
    fixture = TestBed.createComponent(ReseauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
