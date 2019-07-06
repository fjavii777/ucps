import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Wiki } from  '../models/wikis.modeL';
import { Observable } from  'rxjs';

@Injectable({
providedIn: 'root'
})
export class WikisService {
    
    PHP_API_SERVER = "http://localhost/backup-repository-ucps";

constructor(private httpClient: HttpClient) {}
    
    readPolicies(): Observable<Wiki[]>{
        console.log("Entre");
        return this.httpClient.get<Wiki[]>(`${this.PHP_API_SERVER}/loggit.php`);
    }
}