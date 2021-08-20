import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CleanApp';
  data;

  constructor(private servicio: ServiceService) {
  }

  ngOnInit() {
    this.servicio.getData().subscribe(res => {
      this.data = res;
    });
  }

  addClass(item) {
    let doc = document.getElementById(item);
    doc.classList.add('clicked');
  }
}

