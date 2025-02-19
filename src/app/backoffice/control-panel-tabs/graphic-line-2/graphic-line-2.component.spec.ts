import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicLine2Component } from './graphic-line-2.component';

describe('GraphicLine2Component', () => {
  let component: GraphicLine2Component;
  let fixture: ComponentFixture<GraphicLine2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicLine2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicLine2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
