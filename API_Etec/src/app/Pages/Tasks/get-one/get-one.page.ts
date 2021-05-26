import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { TaskService } from 'src/app/Service/task-service.service';

@Component({
  selector: 'app-get-one',
  templateUrl: './get-one.page.html',
  styleUrls: ['./get-one.page.scss'],
})
export class GetOnePage implements OnInit {
  Result: any = [
    {
      id: '',
      nome: '',
      active: true,
    },
  ];
  RegisterForm: FormGroup;
  constructor(
    private navCtrl: NavController,
    public formBuilder: FormBuilder,
    private service: TaskService,
    private alertCtrl: AlertController
  ) {
    this.RegisterForm = this.formBuilder.group({
      id: [''],
    });
  }

  ngOnInit() {}
  GoTo(page) {
    this.navCtrl.navigateForward(page);
  }
  GetOneTask() {
    this.service
      .GetOne(this.RegisterForm.value['id'])
      .then((json) => {
        console.log(json);
       // this.Result =this.Result.filter((taskArray) => taskArray == json);
     
      })
      .catch((erro) => {
        console.log(erro);
        this.Fail();
        
      });
  }

  async Fail() {
    let response = await this.alertCtrl.create({
      header: 'Erro',
      message: 'Ops, Algo deu errado no carregamento das tarefas!',
      buttons: ['Ok'],
    });
    await response.present();
  }
}
