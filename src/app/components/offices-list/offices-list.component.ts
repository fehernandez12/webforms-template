import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/services/office.service';
import { OfficesRequestDto } from 'src/app/entities/request-dto/offices-request-dto';
import { OfficesResponseDto } from 'src/app/entities/response-dto/offices-response-dto';
import { OfficeDto } from 'src/app/entities/objects-dto/office-dto';

@Component({
  selector: 'app-offices-list',
  templateUrl: './offices-list.component.html',
  styleUrls: ['./offices-list.component.scss']
})
export class OfficesListComponent implements OnInit {
  offices: OfficeDto[];
  request: OfficesRequestDto;

  constructor(private officeService: OfficeService) {
    this.offices = [];
    this.request = {
      Header: {
        User: 'ED',
        Token: 'E8/DugPTC1yRn9OSmgKCGQ=='
      }
    }
  }

  ngOnInit(): void {
    this.officeService.getOffices(this.request).subscribe(
      offices => {
        this.offices = offices.OfficeList
      }
    );
  }

}
