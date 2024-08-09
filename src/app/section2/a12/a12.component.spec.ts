import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A12Component } from './a12.component';

describe('A12Component', () => {
  let component: A12Component;
  let fixture: ComponentFixture<A12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
