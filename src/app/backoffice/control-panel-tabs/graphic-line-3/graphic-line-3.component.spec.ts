import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicLine3Component } from './graphic-line-3.component';

describe('GraphicLine3Component', () => {
  let component: GraphicLine3Component;
  let fixture: ComponentFixture<GraphicLine3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicLine3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicLine3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
