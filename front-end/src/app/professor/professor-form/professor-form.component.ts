import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmDlgComponent } from '../../ui/confirm-dlg/confirm-dlg.component';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.scss']
})
export class ProfessorFormComponent implements OnInit {

  constructor(
    private professorSrv: ProfessorService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  title: string = 'Novo professor';
  professor: any = {}; // Objeto vazio

  async ngOnInit() {
    let params = this.actRoute.snapshot.params;
    if(params['id']) { // Se houver um parâmetro chamado id na rota
      try {
        // Busca os dados do professor e preenche a variável ligada ao form
        this.professor = await this.professorSrv.obterUm(params['id']);
        this.title = 'Editando professor';
      }
      catch(error) {
        console.log(error);
      }
    }
  }

  async salvar(form: NgForm) {
    if(form.valid) {
      try {
        let msg = 'Professor criado com sucesso.';
        
        if(this.professor._id) { // Se tem _id, está editando
          msg = 'Professor atualizado com sucesso';
          await this.professorSrv.atualizar(this.professor);
        }
        else { // Criação de um novo professor
          await this.professorSrv.novo(this.professor);
        }
        
        this.snackBar.open(msg, 'Entendi', {duration: 3000});
        this.router.navigate(['/professor']); // Volta à listagem
      }
      catch(error) {
        console.log(error);
        this.snackBar.open('ERRO: não foi possível salvar os dados.', 'Entendi',
          {duration: 3000});
      }
    }
  }

  voltar(form: NgForm) {
    // Vazio por enquanto
  }

}
