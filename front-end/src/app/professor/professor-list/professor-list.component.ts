import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.scss']
})
export class ProfessorListComponent implements OnInit {

  /* ProfessorService injetado como dependência */
  constructor(private professorSrv: ProfessorService) { }

  professores: any = []; // Vetor vazio
  displayedColumns: string[] = ['nome', 'endereco', 'telefone', 'email', 'editar', 'excluir'];

  async ngOnInit() {
    try {
      this.professores = await this.professorSrv.listar();
    }
    catch(error) {
      console.error(error);
    }
  
  }

}
