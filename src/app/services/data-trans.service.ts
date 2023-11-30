import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransService {

  partners:any;
  country:any;
  currency:any;
  methodType:any;
  param:any;
  updateData:any;
  isrecordForUpdate:boolean=false;
  ovaData :any;

  constructor() { }

  public setPartners(data:any){
    this.partners=data;
  }

  public getPartners(){
    return this.partners;
  }

  public setCountry(data:any){
    this.country=data;
  }

  public getCountry(){
    return this.country;
  }

  public setCurrency(data:any){
    this.currency=data;
  }

  public getCurrency(){
    return this.currency;
  }

  public setMethodType(data:any){
    this.methodType=data;
  }

  public getMethodType(){
    return this.methodType;
  }

  public setParam(data:any){
    this.param=data;
  }

  public getParam(){
    return this.param;
  }

  public setUpdateData(data:any){
    this.updateData=data;
  }

  public getUpdateData(){
    return this.updateData;
  }

  public setUpdate(data:boolean){
    this.isrecordForUpdate=data;
  }

  public getUpdate(){
    return this.isrecordForUpdate;
  }

  public setOvaData(response : any){
    this.ovaData = response;
  }

  public getOvaData(){
    console.log(this.ovaData);
    return this.ovaData;
  }

}
