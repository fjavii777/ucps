import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs';

@Injectable({
providedIn: 'root'
})
export class BackupService {
    
    PHP_API_SERVER = "http://localhost/backup-repository-ucps";

constructor(private httpClient: HttpClient) {}
    
    generarBocku(reco:string): Observable<null>{
        return this.httpClient.get<null>(`${this.PHP_API_SERVER}//backup.php?date=`+reco);
    }
}