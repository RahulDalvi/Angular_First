import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompwithbothComponent } from './compwithboth.component';

describe('CompwithbothComponent', () => {
  let component: CompwithbothComponent;
  let fixture: ComponentFixture<CompwithbothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompwithbothComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompwithbothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
