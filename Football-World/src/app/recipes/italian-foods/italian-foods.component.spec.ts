import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianFoodsComponent } from './italian-foods.component';

describe('ItalianFoodsComponent', () => {
  let component: ItalianFoodsComponent;
  let fixture: ComponentFixture<ItalianFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItalianFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalianFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
