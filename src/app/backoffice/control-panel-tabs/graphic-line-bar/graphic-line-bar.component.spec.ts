import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicLineBarComponent } from './graphic-line-bar.component';

describe('GraphicLineBarComponent', () => {
  let component: GraphicLineBarComponent;
  let fixture: ComponentFixture<GraphicLineBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicLineBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicLineBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
