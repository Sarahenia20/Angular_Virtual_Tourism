import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreComponentComponent } from './explore-component.component';

describe('ExploreComponentComponent', () => {
  let component: ExploreComponentComponent;
  let fixture: ComponentFixture<ExploreComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreComponentComponent]
    });
    fixture = TestBed.createComponent(ExploreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
