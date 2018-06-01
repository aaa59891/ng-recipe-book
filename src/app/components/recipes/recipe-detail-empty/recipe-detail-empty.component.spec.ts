import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailEmptyComponent } from './recipe-detail-empty.component';

describe('RecipeDetailEmptyComponent', () => {
  let component: RecipeDetailEmptyComponent;
  let fixture: ComponentFixture<RecipeDetailEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
