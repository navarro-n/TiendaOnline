import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicLineComponent } from './graphic-line.component';

describe('GraphicLineComponent', () => {
  let component: GraphicLineComponent;
  let fixture: ComponentFixture<GraphicLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
