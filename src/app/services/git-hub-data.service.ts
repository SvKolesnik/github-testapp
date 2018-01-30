import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs/Observable';

@Injectable()
export class GitHubDataService {
    private gitUser: Observable<any>;
    constructor(
        public http: HttpClient
    ) { }

    getGitUser() {
        return this.gitUser;
    }

    saveGitUser(user) {
        this.gitUser = user;
    }

    searchUser(userName) {
        this.gitUser = this.http.get<Observable<any>>(`https://api.github.com/users/${userName}`);
        return this.gitUser;
    }
}
