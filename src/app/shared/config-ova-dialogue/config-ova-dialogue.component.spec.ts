import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigOvaDialogueComponent } from './config-ova-dialogue.component';

describe('ConfigOvaDialogueComponent', () => {
  let component: ConfigOvaDialogueComponent;
  let fixture: ComponentFixture<ConfigOvaDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigOvaDialogueComponent]
    });
    fixture = TestBed.createComponent(ConfigOvaDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
