import { Component } from '@angular/core';  
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  constructor(private userService: UserService,public dialog: MatDialog, public newData: UserService) { }
  displayedColumns: string[] = ['id', 'name', 'email', 'age', 'options'];
  openDialog(user:User) {
    const dialogRef = this.dialog.open(ModalComponent,{data: user});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: `,result);
    });
  }
 
  dataSource:User[]=[];
  ngOnInit(): void {
    this.getAll();
  }
  getDeleteID = (id:number) => {
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
    })
  }
  getAll(){
    this.userService.getAll().subscribe((res:User[])=>{
      this.dataSource = res
    })
  }
  
  updateUser(){
    this.userService.updateUser(this.newData).subscribe(data => {
      console.log(data);
    })
  }
  
  // columnsSchema: any = COLUMNS_SCHEMA;
}
