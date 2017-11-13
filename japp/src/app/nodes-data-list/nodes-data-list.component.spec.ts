import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesDataListComponent } from './nodes-data-list.component';

describe('NodesDataListComponent', () => {
  let component: NodesDataListComponent;
  let fixture: ComponentFixture<NodesDataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodesDataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodesDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
