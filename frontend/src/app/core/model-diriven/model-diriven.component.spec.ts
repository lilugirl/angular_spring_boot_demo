import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDirivenComponent } from './model-diriven.component';

describe('ModelDirivenComponent', () => {
  let component: ModelDirivenComponent;
  let fixture: ComponentFixture<ModelDirivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelDirivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDirivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
