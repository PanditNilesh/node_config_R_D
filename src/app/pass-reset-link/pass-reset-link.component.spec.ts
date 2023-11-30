import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassResetLinkComponent } from './pass-reset-link.component';

describe('PassResetLinkComponent', () => {
  let component: PassResetLinkComponent;
  let fixture: ComponentFixture<PassResetLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassResetLinkComponent]
    });
    fixture = TestBed.createComponent(PassResetLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
