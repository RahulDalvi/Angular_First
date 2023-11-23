import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOneCompComponent } from './module-one-comp.component';

describe('ModuleOneCompComponent', () => {
  let component: ModuleOneCompComponent;
  let fixture: ComponentFixture<ModuleOneCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleOneCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleOneCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
