import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  GitHubDataService } from '../../services/git-hub-data.service';
import { Observable } from  'rxjs/Observable';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
    user: Observable<any>;
    nickname: string;
    searchingUser: boolean = false;
    showContinueBtn: boolean = false;
    newMessage: string;
    @Output() newAppMessage: EventEmitter<any> = new EventEmitter();

    constructor(
        public gitHubService: GitHubDataService
    ) { }

    ngOnInit() {
        //this.data = new Observable(obs => {
        //    setTimeout(() => { obs.next(1) }, 100);
        //    setTimeout(() => { obs.next(2) }, 200);
        //    setTimeout(() => { obs.next(3) }, 300);

        //});
        //this.data.subscribe(data => console.log(data));
        //this.gitHubService.searchUser('dmgame').subscribe(user => {
        //    this.user = user;
        //    console.log(user);
        //} )
    }

    onSearch(form) {
        this.searchingUser = true;

        this.gitHubService.searchUser(this.nickname).subscribe(user => {
            this.user = user;
            this.searchingUser = false;
            //this.newMessage = 'We found user...';
            this.showContinueBtn = true;
            this.newAppMessage.emit({ message: `We found user ${user.login}`, error: false });
            console.log(this.user);
        },
            error => {
                this.showContinueBtn = false;
                this.searchingUser = false;
                this.newAppMessage.emit({ message: `User ${this.nickname} not found.`, error: true });
});
    }

}
