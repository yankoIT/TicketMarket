import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class RequesterService {
  public readonly baseUrl = "https://baas.kinvey.com";
  public readonly appKey = "kid_H1A0hE6GI";
  public readonly appSecret = "05cf88ff087349018dd80cd72dcde939";

  constructor() {}

  createAuthorization(type) {
    return type === "Basic"
      ? `Basic ${btoa(`${this.appKey}:${this.appSecret}`)}`
      : `Kinvey ${sessionStorage.getItem("authtoken")}`;
  }

  createHeader(type, httpMethod, data) {
    const headers = {
      method: httpMethod,
      headers: {
        Authorization: this.createAuthorization(type),
        "Content-Type": "application/json"
      },
      body: null
    };
    if (httpMethod === "POST" || httpMethod === "PUT") {
      headers.body = JSON.stringify(data);
    }
    return headers;
  }

  handleError(e) {
    if (!e.ok) {
      throw new Error(e.statusText);
    }
    return e;
  }

  deserializeData(x) {
    if (x.status === 204) {
      return x;
    }

    return x.json();
  }
}
