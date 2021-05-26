import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { TaskService } from 'src/app/Service/task-service.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.page.html',
  styleUrls: ['./get-all.page.scss'],
})
export class GetAllPage implements OnInit {
  Result: any = [
    {
      id: '',
      nome: '',
      active: true,
    },
  ];
  constructor(private navCtrl: NavController, private service: TaskService,private alertCtrl:AlertController) {}

  ngOnInit() {}
  GoTo(page) {
    this.navCtrl.navigateForward(page);
  }
  GetAllTasks() {
    this.service
      .GetAll()
      .then((json) => {
        console.log(json);
        this.Result = json;
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
 
 async Fail(){
    let response = await this.alertCtrl.create({
      header: 'Erro',
      message: 'Ops, Algo deu errado no carregamento das tarefas!',
      buttons: ['Ok'],
    });
    await response.present();
  }
}
