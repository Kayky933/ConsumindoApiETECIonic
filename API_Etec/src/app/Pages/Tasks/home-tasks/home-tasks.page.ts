import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-tasks',
  templateUrl: './home-tasks.page.html',
  styleUrls: ['./home-tasks.page.scss'],
})
export class HomeTasksPage implements OnInit {

  constructor(private navCtrl:NavController) {}
  ngOnInit() {
  }
  GoTo(page){
    this.navCtrl.navigateForward(page);
  }
 

}
