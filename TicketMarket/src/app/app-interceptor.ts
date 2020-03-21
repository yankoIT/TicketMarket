import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http'
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

const apiURL = environment.apiURL;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const fullURL = req.url.includes('http') ? req.url : `${apiURL}/${req.url}`;
        const isApiRequest = fullURL.includes(apiURL);

        return next.handle(req.clone({ url: fullURL, withCredentials: isApiRequest }));
    }

}