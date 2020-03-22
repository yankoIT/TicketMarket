import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class UserService {

  get isLogged() {
    return !!localStorage.getItem("username");
  }

  constructor(
    private http: HttpClient
  ) {}

  register(username: string, password: string) {
    const url = `user/${environment.appKey}`;
    return this.http.post(url, { username, password });
  }

  login(username: string, password: string) {
    const url = `user/${environment.appKey}/login`;
    return this.http.post(url, { username, password });
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
