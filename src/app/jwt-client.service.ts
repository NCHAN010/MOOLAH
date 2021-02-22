import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class JwtClientService {
private baseUrl = 'http://localhost:8080/moolah';
  constructor(private http:HttpClient) { }

  public generateToken(request)
  {
    return this.http.post("http://localhost:8080/moolah/authenticate",request,{responseType:'text' as 'json'});

  }
  public welcome(token)
  {
    let tokenStr='Bearer '+token;
    const headers= new HttpHeaders().set("Authorization",tokenStr);
   //   headers.add("Access-Control-Allow-Origin", "*");
//headers.add("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    return this.http.get("http://localhost:8080/moolah/ADMIN/welcomestring", {headers,responseType:'text' as 'json'});
  }

  public create_moolahUser(moolahuser: Object ): Observable<Object> 
  {
 
   return this.http.post("http://localhost:8080/moolah/VISITOR/createMoolahUser" ,moolahuser);
   }
   public create_primaryComponent(userId: String,primarycom: Object ):Observable<Object>
   {
     return this.http.post(`http://localhost:8080/moolah/USER/${userId}/createPrimaryComponent` , primarycom);

   }

   /*public create_secondaryComponent(orgId: String,userId:String,secondarycom: Object ):Observable<Object>
   {
     return this.http.post(`http://localhost:8080/moolah/USER/${orgId}/${userId}/createSecondaryComponent` , secondarycom);

   }*/
   delete_moolahUser(id: String): Observable<any> {
    console.log(id);
   // return this.http.delete(`${this.baseUrl}/moolah/${id}`, { responseType: 'text' });
  return this.http.delete(`http://localhost:8080/moolah/ADMIN/delete/${id}`, { responseType: 'text'});
  

  }


  get_moolahUser(id: String): Observable<any> {
  
    return this.http.get(`http://localhost:8080/moolah/ADMIN/moolahUsers/${id}`);
  }
  
  getmoolahUserList(): Observable<any> {
    return this.http.get(`http://localhost:8080/moolah/ADMIN/moolahUserList`);
  }


 
  public recieveAdminToken(token): Observable<any> {
      let tokenStr ='Bearer '+token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
  // return this.http.get('http://localhost:8080/moolah/moolahUserList', {headers}); 
  return this.http.get('http://localhost:8080/moolah/ADMIN/moolahUserList' , {headers, responseType:'text' as 'json'});
  }

  public recieveMoolahUserDetailToken(): Observable<any> {
    //  let tokenStr ='Bearer '+token;
  //  const headers = new HttpHeaders().set('Authorization', tokenStr);
  // return this.http.get('http://localhost:8080/moolah/moolahUserList', {headers}); 
  return this.http.get('http://localhost:8080/moolah/ADMIN/moolahUserList' );
  }

   





}
