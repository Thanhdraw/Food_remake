import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

interface Employee {
  first_name: string;
  last_name: string;
  rank_list: { criteria: string; rank: number; }[];
  full_name(): string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
  matcher = new ErrorStateMatcher();
// implements OnInit {
  //   ngOnInit(): void {

  //   }
  //   employee: Employee = {
  //     first_name: "QuocThanh",
  //     last_name: "Dang",
  //     rank_list: [
  //        { criteria: 'Knowledge', rank: 7.0 },
  //        { criteria: 'Quality', rank: 8.5 },
  //        { criteria: 'Autonomy', rank: 7.5 },
  //        { criteria: 'Complexity', rank: 9.5 },
  //        { criteria: 'Perception of context', rank: 9.0 },
  //        { criteria: 'Hou-ren-sou', rank: 9.5 },
  //        { criteria: 'Teamwork', rank: 9.5 },
  //        { criteria: 'Management', rank: 9.5 },
  //        { criteria: 'Coding', rank: 9.5 },
  //        { criteria: 'QA', rank: 9.5 }
  //     ],
  //     full_name() {
  //       return `${this.last_name} ${this.first_name}`;
  //    }
  //  };

}

