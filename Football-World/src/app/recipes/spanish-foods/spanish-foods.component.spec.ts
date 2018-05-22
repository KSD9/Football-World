import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishFoodsComponent } from './spanish-foods.component';

describe('SpanishFoodsComponent', () => {
  let component: SpanishFoodsComponent;
  let fixture: ComponentFixture<SpanishFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanishFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
