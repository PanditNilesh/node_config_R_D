import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigOvaComponent } from './config-ova.component';

describe('ConfigOvaComponent', () => {
  let component: ConfigOvaComponent;
  let fixture: ComponentFixture<ConfigOvaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigOvaComponent]
    });
    fixture = TestBed.createComponent(ConfigOvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
