import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
        url: 'https://http2.mlstatic.com/resident-evil-4-pc-completo-legendado-portugus-c-brinde-D_NQ_NP_643205-MLB26510344008_122017-F.jpg',
        description: 'RE4'
    },
    {
        url: 'http://proximonivel.pt/wp-content/uploads/2016/12/resident-evil-5-remaster-rev-top-pn.jpg',
        description: 'RE5'
    }
  ];

}
