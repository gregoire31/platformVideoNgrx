import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthentificationComponent } from 'src/app/component/authentification/authentification.component';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-wrong-password-modal',
  templateUrl: './wrong-password-modal.component.html',
  styleUrls: ['./wrong-password-modal.component.css']
})
export class WrongPasswordModalComponent {

  public authorizeConnexion = false
  public failIdentifiants = false
  public correctRegister = false

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AuthentificationComponent>) {

      if(this.data.isLogging){
        this.authorizeConnexion = true
      }else{
        this.failIdentifiants = true
      }
      if(this.data.isCorrectRegister){
        this.failIdentifiants = false
        this.correctRegister = true
      }
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
