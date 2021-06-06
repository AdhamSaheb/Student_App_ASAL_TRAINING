import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  @Input() title : String  = "Create a Course";
  @Input() message ;
  constructor(private modalService: NgbActiveModal) { }

  ngOnInit(): void {
  }

  
  confirm(){
    //close modal with the ture as result to confirm action 
    this.modalService.close(true);
  }
  
  closeModal() {
    this.modalService.dismiss();
  }

}
