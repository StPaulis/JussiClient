import { TestBed, inject } from '@angular/core/testing';

import { NodesDataService } from './nodes-data.service';

describe('NodesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NodesDataService]
    });
  });

  it('should be created', inject([NodesDataService], (service: NodesDataService) => {
    expect(service).toBeTruthy();
  }));
});
