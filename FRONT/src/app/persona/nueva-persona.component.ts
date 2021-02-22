import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from '../models/persona';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-nueva-persona',
  templateUrl: './nueva-persona.component.html',
  styleUrls: ['./nueva-persona.component.css']
})
export class NuevaPersonaComponent implements OnInit {

  constructor(
    private personaService: PersonaService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  usuario = '';
  password = '';
  nombre =  '';

  ngOnInit(): void {
  }

  onCreate(): void {
    const persona = new Persona(this.usuario, this.password, this.nombre)
    this.personaService.save(persona).subscribe(
      data => {
        this.toastr.success('Persona Creada','OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/'])
      },
      err => {
        this.toastr.error(err.error.mensaje,'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/'])
      }
    );

  }

}
