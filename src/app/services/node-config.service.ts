import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeConfigService implements OnInit {

  public getAllData : any= [];
  public subject  = new Subject<any>();
  public allDataSoruce = new BehaviorSubject(this.getAllData);
  mainTransferData = this.allDataSoruce.asObservable();
 
  // url                 = '/assets/fakeData.json';
  // createNodeConfigUrl = 'https://mfsafricapayments.com/NodeConfigurationWeb/createNodeConfig';
  // loginURL            = 'https://mfsafricapayments.com/NodeConfigurationWeb/login';
  // sendEmailURL        = 'https://mfsafricapayments.com/NodeConfigurationWeb/sendEmail';
  // otpCheckURL         = 'https://mfsafricapayments.com/NodeConfigurationWeb/verifyOtp';   
  // verifyMFSACodeURL   = 'https://mfsafricapayments.com/NodeConfigurationWeb/verifyMfsaCode';
  // updatePassURL       = 'https://mfsafricapayments.com/NodeConfigurationWeb/updatePassword'; 
  // deleteNodeURL       = 'https://mfsafricapayments.com/NodeConfigurationWeb/deleteNode';   
  // getOvaURL           = 'http://mfsafricapayments.com/NodeConfigurationWeb/getOVA';  
  // addOvaURL           = 'http://mfsafricapayments.com/NodeConfigurationWeb/addOVA';  

  url                 = '/assets/fakeData.json';                      
  createNodeConfigUrl = 'http://localhost:8080/NodeConfigurationWeb/createNodeConfig';
  loginURL            = 'http://localhost:8080/NodeConfigurationWeb/login';
  sendEmailURL        = 'http://localhost:8080/NodeConfigurationWeb/sendEmail';
  otpCheckURL         = 'http://localhost:8080/NodeConfigurationWeb/verifyOtp';   
  verifyMFSACodeURL   = 'http://localhost:8080/NodeConfigurationWeb/verifyMfsaCode';
  updatePassURL       = 'http://localhost:8080/NodeConfigurationWeb/updatePassword';  
  deleteNodeURL       = 'http://localhost:8080/NodeConfigurationWeb/deleteNode';  
  getOvaURL           = 'http://localhost:8080/NodeConfigurationWeb/getOVA';  
  addOvaURL           = 'http://localhost:8080/NodeConfigurationWeb/addOVA';  
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getUserData(): Observable<any[]> {
    return this.http.get<any>(this.url);
  }

  createNodeConfig(reqObj: any): Observable<any[]> {
    return this.http.post<any>(`${this.createNodeConfigUrl}`, reqObj)
  }

  userLogin(userData : any): Observable<any[]>{
    return this.http.post<any>(`${this.loginURL}`,userData)
  }

  sendOTPtoMail(userEmail : any):Observable<any[]>{
    return this.http.post<any>(`${this.sendEmailURL}`,userEmail);
  }

  checkOTP(userData : any):Observable<any[]>{
    return this.http.post<any>(`${this.otpCheckURL}`,userData);
  }

  verifyMfsaCode(msfaCode : any):Observable<any[]>{
    return this.http.post<any>(`${this.verifyMFSACodeURL}`,msfaCode);
  }

  updatePass(userData : any):Observable<any[]>{
    return this.http.post<any>(`${this.updatePassURL}`,userData);
  }

  getAllUserData(data : any){
    this.allDataSoruce.next(data)
  }

  deleteNodeData(id: any,method :any) {
    return this.http.get<any>(`${this.deleteNodeURL}?partnerCode=${id}&method=${method}`);
  }

  getOvaList(){
    return this.http.get<any>(`${this.getOvaURL}`)
  }

  addOva(element :any): Observable<any[]>{
    return this.http.post<any>(`${this.addOvaURL}`,element)
  }

}
