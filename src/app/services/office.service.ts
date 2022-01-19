import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { OfficesRequestDto } from '../entities/request-dto/offices-request-dto';
import { OfficesResponseDto } from '../entities/response-dto/offices-response-dto';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {
  private endPoint: string = '';

  // Encabezados de petición HTTP, no confundir con el HeaderDto.
  private header = new HttpHeaders(
    {
      'Content-type': 'application/json'
    }
  );

  constructor(private proxy: HttpClient) { }

  getOffices(request:OfficesRequestDto): Observable<OfficesResponseDto>{
    return this.proxy.post<OfficesResponseDto>(
      this.endPoint,
      request,
      {
        headers: this.header
      }
    );
  }
}
