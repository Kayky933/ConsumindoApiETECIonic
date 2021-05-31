import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, NavController, ToastController } from '@ionic/angular';
import { TaskService } from 'src/app/Service/task-service.service';

@Component({
  selector: 'app-home-tasks',
  templateUrl: './home-tasks.page.html',
  styleUrls: ['./home-tasks.page.scss'],
})
export class HomeTasksPage implements OnInit {

  tasks: any = [{
    id: '',
      nome: '',
      active: true,
  }];

  constructor(
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
    private navCtrl: NavController,
    private service: TaskService
  ) {
    this.loadStorage();
  }

  ngOnInit() {}

  GoToPage(page) {
    this.navCtrl.navigateForward(page);
  }
  
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async ShowAdd() {
    const alert = await this.alertCtrl.create({
      header: 'O que deseja fazer ?',
      inputs: [
        {
          name: 'taskToDo',
          type: 'text',
          placeholder: 'digite aqui a tarefa',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('clicked cancel');
          },
        },
        {
          text: 'Adicionar',
          handler: (form) => {
            console.log(form.taskToDo);
            this.service.Post(form.taskToDo);
            this.Add(form.taskToDo);
          },
        },
      ],
    });
    await alert.present();
  }

  async Add(newTask: string) {
    // valida se usuário preencheu task
    if (newTask.trim().length < 1) {
      const toast = await this.toastCtrl.create({
        message: 'preencha com informações válidas !',
        duration: 2000,
        position: 'top',
      });

      toast.present();
      return;
    }

    let task = { nome: newTask, done: false };
    this.tasks.push(task);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('taskDb', JSON.stringify(this.tasks));
  }
  async delet(task: any) {
    this.tasks = this.tasks.filter((taskArray) => taskArray != task);
    this.updateLocalStorage();
  }

  GetAllTasks() {
    this.service
      .GetAll()
      .then((json) => {
        console.log(json);
        this.tasks = json;
      })
      .catch((erro) => {
        console.log(erro);
      });
    }
  loadStorage() {
    let taskJson = localStorage.getItem('taskDb');
    console.log(taskJson);
    if (taskJson) {
      this.tasks = JSON.parse(taskJson);
    }
  }

  async openActions(task: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'O QUE DESEJA FAZER ?',
      buttons: [
        {
          text: task.done ? 'Desmarcar' : 'Marcar',
          icon: task.done ? 'radio-button-off' : 'checkmark-circle',
          handler: () => {
            task.done = !task.done;
            this.updateLocalStorage();
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async Fail(errors) {
    let alert = await this.alertCtrl.create({
      header: 'Fail',
      message: '<p>Ops, something is wrong</p>\n' + errors,
      buttons: ['Ok'],
    });
    await alert.present();
  }
 

}
