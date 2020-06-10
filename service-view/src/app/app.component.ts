import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { CatalogsService } from './service/catalogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-view';
  constructor(){
    
  }

}
