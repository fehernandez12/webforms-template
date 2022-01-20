import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/services/office.service';
import { OfficesRequestDto } from 'src/app/entities/request-dto/offices-request-dto';
import { OfficesResponseDto } from 'src/app/entities/response-dto/offices-response-dto';
import { OfficeDto } from 'src/app/entities/objects-dto/office-dto';
import { AlertHelper } from 'src/app/utilities/alert-helper';

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
        User: 'cooprofesoresun',
        Token: 'IbRyK1cV8jEbuPEqVamVYzZ0KHIG7sViimdXfRowls0='
      }
    }
  }

  ngOnInit(): void {
    this.officeService.getOffices(this.request).subscribe(
      officesResult => {
        if (!officesResult.Success) {
          AlertHelper.errorAlert(officesResult.Message);
        } else {
          this.offices = officesResult.OfficeList
        }
      }
    );
  }

}
