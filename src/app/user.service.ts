import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private baseUrl = 'http://localhost:8080/moolah/USER';
  constructor(private http:HttpClient) { }

  login_moolahUser(username: string ,  password: string): Observable<any>
  {
     return this.http.get(`http://localhost:8080/moolah/USER/${username}/${password}/login`);
  }

  public getUserHomePageById(userId:String): Observable<any> {
  
    
    return this.http.get(`http://localhost:8080/moolah/USER/${userId}/HomePage`);
  }
//CREATE  
//--> @PostMapping("/USER/{orgId}/{userId}/createSecondaryComponent}")
  public create_secondaryComponent(orgId: String,userId:String,secondarycom: Object ):Observable<Object>
   {
     return this.http.post(`http://localhost:8080/moolah/USER/${orgId}/${userId}/createSecondaryComponent` , secondarycom);

   }

   
//--> @PostMapping("/USER/{userId}/createSecondaryComponent2")
  public create_secondaryComponent2(userId:String,secondarycom: Object ):Observable<Object>
   {
     return this.http.post(`http://localhost:8080/moolah/USER/${userId}/createSecondaryComponent2` , secondarycom);

   }
   //->@PostMapping("/USER/{userId}/createConstantComponent")
   public create_constantComponent(userId:String,constantcom:Object):Observable<Object>
   {
     return this.http.post(`http://localhost:8080/moolah/USER/${userId}/createConstantComponent`,constantcom);
     
   }
   //@PostMapping("/USER/{orgId}/increSC")
   public incrementSC(orgId:String):Observable<any>
   {
     
     return this.http.get(`http://localhost:8080/moolah/USER/${orgId}/increSC`);
      console.log("REturned this address: ",orgId);
   }

//VIEW
//->@GetMapping("/USER/userId/getAllPrimaryCom")
  public getAllPrimaryCom(userId:String): Observable<any> {
    return this.http.get(`http://localhost:8080/moolah/USER/${userId}/getAllPrimaryCom`);
  }
//->@GetMapping("/USER/{orgId}/getPrimaryCom")
  public getPrimaryComByOrgId(orgId:String):Observable<any>
  {
    return this.http.get(`http://localhost:8080/moolah/USER/${orgId}/getPrimaryCom`);
  }
  //@GetMapping("/USER/{userId}/HomePage")
 
//GET_VALUE

//->@GetMapping("/USER/{userId}/{moolahtitle}/orgId")
public getOrgIdFromTitle_primaryC(moolahtitle:string, userId:string)
{
  return this.http.get<string>(`http://localhost:8080/moolah/USER/${userId}/${moolahtitle}/orgId`, {responseType:'text' as 'json'});

}

}
