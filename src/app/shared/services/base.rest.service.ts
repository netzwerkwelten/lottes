import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BaseRestService {

    constructor(private http: HttpClient) {
    }

    public getData() {
        return this.http.get(
            `${environment.apiUrl}/path`
        ).subscribe(response => {
            return response;
        });
    }

}
