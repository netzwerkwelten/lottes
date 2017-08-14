import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";

@Injectable()
export class BaseRestService {

    constructor(private http: Http) {
    }

    public geData(){
        return this.http.get(
            `${environment.apiUrl}/path`
        ).map(response => {
            return response.json();
        });
    }

}
