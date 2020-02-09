import { Injectable } from "@angular/core";
import { RequesterService } from "./requester.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserService {
  public user = "";
  constructor(
    private http: HttpClient,
    private requester: RequesterService,
    private router: Router
  ) {}

  register(username: string, password: string) {
    const url = `${this.requester.baseUrl}/user/${this.requester.appKey}`;

    const headers = new HttpHeaders()
      .set("Authorization", this.requester.createAuthorization("Basic"))
      .set("Content-Type", "application/json");

    this.http
      .post(url, { username, password }, { headers })
      .subscribe(userInfo => {
        this.setAuthInfo(userInfo);
        this.router.navigate(['']);
      });
  }

  login(username: string, password: string) {
    const url = `${this.requester.baseUrl}/user/${this.requester.appKey}/login`;

    const headers = new HttpHeaders()
      .set("Authorization", this.requester.createAuthorization("Basic"))
      .set("Content-Type", "application/json");

      this.http
        .post(url, { username, password }, { headers })
        .subscribe(userInfo => {
          this.setAuthInfo(userInfo);
          this.router.navigate(['']);
        });
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  setAuthInfo(userInfo) {
    sessionStorage.setItem("authtoken", userInfo._kmd.authtoken);
    sessionStorage.setItem("userId", userInfo._id);
    sessionStorage.setItem("username", userInfo.username);
    this.user = userInfo.username;
  }
}
