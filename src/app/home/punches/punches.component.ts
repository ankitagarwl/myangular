import { Component, OnInit } from '@angular/core';
import { IsvalidService } from '../../isvalid.service';
import { IResult } from './../../IResult';
import { IPunches } from './../../IPunches';
@Component({
  selector: 'app-punches',
  templateUrl: './punches.component.html',
  styleUrls: ['./punches.component.css']
})
export class PunchesComponent implements OnInit {

  constructor(private isvalidservice: IsvalidService) { }
resultarr :any;
selectedTemplate :any;
processTemplates:any;
emp_code :number;
  ngOnInit() {



this.isvalidservice.punchesbyemp(1).subscribe
  (
      data => {
        
     this.resultarr = data.Results;
     console.log(this.resultarr);
     
  });


  this.isvalidservice.getProcessTemplates()
  .subscribe(data => {
    this.processTemplates = data;
    console.log(this.processTemplates);
  });

  }


}
