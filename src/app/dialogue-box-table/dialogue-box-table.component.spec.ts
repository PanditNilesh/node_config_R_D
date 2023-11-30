import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueBoxTableComponent } from './dialogue-box-table.component';

describe('DialogueBoxTableComponent', () => {
  let component: DialogueBoxTableComponent;
  let fixture: ComponentFixture<DialogueBoxTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogueBoxTableComponent]
    });
    fixture = TestBed.createComponent(DialogueBoxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
