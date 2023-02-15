import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = '';
  token: string = '';
  constructor(private sanitizer: DomSanitizer,private http: HttpClient, private router: Router) {
    this.baseUrl = "http://54.89.133.248/"
  }
  get(api: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*', 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*', 'Authorization': `Bearer ${this.token}`
    });
    let options = { headers: headers };
    return this.http
      .get(this.baseUrl + api, { ...options, withCredentials: true })
      .pipe(map((response: any) => {
        if (typeof response == "string") {
          return this.JsonParseData(response);
        }
        else {
          return response;
        }
      }));
  }

  post(api: string, data: any, responseType: any = "json") {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*', 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*', 'Authorization': `Bearer ${this.token}`
    });
    let options = { headers: headers, responseType: responseType };
    return this.http
      .post(this.baseUrl + api, JSON.stringify(data), { ...options, withCredentials: true })
      .pipe(map(response => {
        if (typeof response == "string") {
          return this.JsonParseData(response);
        }
        else {
          return response;
        }
      }));
  }
  put(api: string, data: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*', 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*', 'Authorization': `Bearer ${this.token}`
    });
    let options = { headers: headers };
    return this.http
      .put(this.baseUrl + api, JSON.stringify(data), { ...options, withCredentials: true })
      .pipe(map(response => {
        if (typeof response == "string") {
          return this.JsonParseData(response);
        }
        else {
          return response;
        }
      }));
  }
  delete(api: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*', 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*', 'Authorization': `Bearer ${this.token}`
    });
    let options = { headers: headers };
    return this.http
      .delete(this.baseUrl + api, { ...options, withCredentials: true })
      .pipe(map(response => {
        if (typeof response == "string") {
          return this.JsonParseData(response);
        }
        else {
          return response;
        }
      }));
  }
  JsonParseData(data: any) {
    let result = data;
    try {
    } catch (e) {
      console.log(e);
    }
    return result;
  }

  NavigateToRouteWithQueryString(routeName: string, queryParams?: any) {
    if (queryParams == undefined || queryParams == null)
      this.router.navigate([routeName]);
    else
      this.router.navigate([routeName], queryParams);
  }

  NavigateToRoute(routeName: string, params?: any) {

    if (params == undefined || params == null)
      this.router.navigate([routeName]);
    else
      this.router.navigate([routeName, params]);
  }
  fileToBase64 = async (file: any) =>
    new Promise((resolve, reject) => {
      let width: any, height: any;
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        let img = new Image();
        img.src = reader.result?.toString()!;
        img.onload = () => {
          width = img.width;
          height = img.height;
          resolve({ height, width, base64: reader.result })
        }
      }
      reader.onerror = (e) => reject(e)
    })
  transform(base64Image: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64Image);
  }
  transformDate(date: any) {
    return formatDate(date, "yyyy-MM-dd", "en")
  }
}
