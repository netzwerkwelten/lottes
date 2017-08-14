import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Router} from "@angular/router";

@Injectable()
export class CustomHttp extends Http {

    constructor(backend: XHRBackend, options: RequestOptions,
                private router: Router) {
        super(backend, options);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options).catch((err) => {
            if (err.status === 422) {
                let errorBody = JSON.parse(err._body);

            }else if(err.status === 401) {
                // not logged in -> redirect to login page
                this.router.navigate(['/login']);
            }else{
                console.error(err);
            }
            return Observable.throw(err);
        });
    }

}
