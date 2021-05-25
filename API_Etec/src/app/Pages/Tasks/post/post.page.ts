import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { TaskService } from 'src/app/Service/task-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  RegisterForm: FormGroup;
  errors: string = '';
  
  constructor(
    private navCtrl: NavController,
    public formBuilder: FormBuilder,
    private service: TaskService,
    private alertCtrl: AlertController
  ) {
    this.RegisterForm = this.formBuilder.group({
      nome: ['', Validators.nullValidator],
    });
  }

  ngOnInit() {}

  GoToPage(page) {
    this.navCtrl.navigateForward(page);
  }
  PostTask() {
    console.log('Post Task: ' + '\n' + this.RegisterForm.value['nome']);

    this.service
      .Post(this.RegisterForm.value['nome'])
      .then((json) => {
        console.log(json);
      })
      .catch((erro) => {
        console.log(erro.error);
        this.errors = erro.error[0];
        this.Fail(JSON.stringify(erro.error));
      });
  }


  async Fail(errors) {
    let alert = await this.alertCtrl.create({
      header: 'Falha',
      message: '<p>Ops, ocorreu um erro no cadastro de uma nova tarefa:</p>\n' + errors,
      buttons: ['Ok'],
    });
    await alert.present();
  }
}
