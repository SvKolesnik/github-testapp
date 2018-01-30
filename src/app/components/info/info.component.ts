import { Component, OnInit } from '@angular/core';
import {  GitHubDataService } from '../../services/git-hub-data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
    public currUser = new Array();
    constructor(
        public gitHubService: GitHubDataService
      ) { }

    ngOnInit() {
        this.gitHubService.getGitUser().subscribe(user => {

            for (let key in user) {
                if (user.hasOwnProperty(key)) {
                    this.currUser.push({ key: key, value: user[key] });
                }
            }
            //console.log(this.currUser);
        });

  }

}
