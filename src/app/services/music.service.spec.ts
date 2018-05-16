import { TestBed, inject } from '@angular/core/testing';

import { MusicService } from './music.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MusicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicService],
      imports: [HttpClientModule, HttpClientTestingModule]
    });
  });

  it('should be created', inject([MusicService], (service: MusicService) => {
    expect(service).toBeTruthy();
  }));
});
