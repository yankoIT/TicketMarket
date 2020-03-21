import { Injectable } from "@angular/core";
import { RequesterService } from "./requester.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {

  get isLogged() {
    return !!localStorage.getItem("username");
  }

  constructor(
    private http: HttpClient,
    private requester: RequesterService
  ) {}

  register(username: string, password: string) {
    const url = `user/${this.requester.appKey}`;

    const headers = new HttpHeaders()
      .set("Authorization", this.requester.createAuthorization("Basic"))
      .set("Content-Type", "application/json");

    return this.http.post(url, { username, password }, { headers });
  }

  login(username: string, password: string) {
    const url = `user/${this.requester.appKey}/login`;

    const headers = new HttpHeaders()
      .set("Authorization", this.requester.createAuthorization("Basic"))
      .set("Content-Type", "application/json");

    return this.http.post(url, { username, password }, { headers }, );
  }

  logout() {
    localStorage.clear();
  }

  setAuthInfo(userInfo) {
    localStorage.setItem("authtoken", userInfo._kmd.authtoken);
    localStorage.setItem("userId", userInfo._id);
    localStorage.setItem("username", userInfo.username);
  }
}
