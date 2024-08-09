import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A10Component } from './a10.component';

describe('A10Component', () => {
  let component: A10Component;
  let fixture: ComponentFixture<A10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
