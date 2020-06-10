import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service'
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { WrongPasswordModalComponent } from 'src/app/modals/wrong-password-modal/wrong-password-modal.component';
import { forkJoin } from 'rxjs';

@Component({ 
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  public isLogging = true
  public emailAlreadyExist = false
  public isCorrectRegister = false
  form:FormGroup;
  private formSubmitAttempt: boolean; // {2}
  constructor(private fb:FormBuilder, 
    private authService: AuthService, 
    private router: Router,
    public dialog: MatDialog) {

    }

  ngOnInit(): void {

    this.form = this.fb.group({     // {5}
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WrongPasswordModalComponent, {
      width: '250px',
      data : {
        isLogging : this.isLogging,
        isCorrectRegister : this.isCorrectRegister
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onSubmit() {
    const val = this.form.value;

    if (this.form.valid) {
        if(this.isLogging){
          this.authService.login(val.email, val.password)
              .subscribe(
                  (data) => {
                    if(data[0].token === false){
                      this.openDialog()
                    }else{
  
                    }
                      this.router.navigateByUrl('/catalogs-component');
                  }
              )
        }else{

          let addUser = this.authService.register(val.email,val.password)
          let userList = this.authService.getUserList()
          forkJoin([addUser, userList]).subscribe(results => {
            console.log(results[0]);
            if(results[0].length === results[1].length){
              this.openDialog()
            }else{
              this.isCorrectRegister = true
              this.openDialog()
              this.isLogging = true
            }
            
            
          })
        }
    }

  }

  goToLogin(){
    this.isLogging = true
  }

  goToRegister(){
    this.isLogging = false
  }

}

