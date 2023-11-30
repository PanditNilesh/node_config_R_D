import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeConfigurationComponent } from './node-configuration.component';

describe('NodeConfigurationComponent', () => {
  let component: NodeConfigurationComponent;
  let fixture: ComponentFixture<NodeConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodeConfigurationComponent]
    });
    fixture = TestBed.createComponent(NodeConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
