import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutDataListComponent } from './out-data-list.component';

describe('OutDataListComponent', () => {
  let component: OutDataListComponent;
  let fixture: ComponentFixture<OutDataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutDataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
