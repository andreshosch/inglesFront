import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/interfaces/alumno'
import { AlumnoService } from 'src/app/services/alumno.service';




@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  listAlumnos: Alumno[] = []


  displayedColumns: string[] = ['nombre', 'apellido', 'dni', 'domicilio', 'telefono', 'mail', 'curso', 'acciones'];
  dataSource!: MatTableDataSource<any>;

   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort



  constructor(private _alumnoService: AlumnoService, private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
     this.cargarAlumno()
  }


  cargarAlumno() {
    this._alumnoService.getStudent().subscribe(data => {
       this.listAlumnos = data;
        this.dataSource = new MatTableDataSource(this.listAlumnos) 
        this.dataSource.paginator = this.paginator;
      console.log(this.dataSource.paginator)
      this.dataSource.sort = this.sort;      
    }, error => {
      console.log(error)
    })
  }

   ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource.paginator)
      this.dataSource.sort = this.sort;
   }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  eliminarAlumno(index: string) {
    this._alumnoService.deleteStudent(index).subscribe(data => {
      this.listAlumnos = data
      this.cargarAlumno();
      this._snackBar.open('El usuario ha sido eliminado correctamente', '', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    }, error => {
      console.log(error)
    });
  }
}
