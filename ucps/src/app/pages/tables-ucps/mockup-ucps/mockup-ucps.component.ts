import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
@Component({
    selector: 'ngx-mockup-ucps',
    templateUrl: './mockup-ucps.component.html',
    styles: [`
    nb-card {
        transform: translate3d(0, 0, 0);
    }
`],
})
export class MockuoUcpsComponent implements OnInit {
    
    constructor(private modalService: NgbModal) {

    }
    
    ngOnInit() {
        
    }
    showSmallModal() {
        const activeModal = this.modalService.open(ModalComponent, { size: 'sm', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = 'Small Modal';
    }

}
