/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CathegoryViewModel } from '../models/cathegory-view-model';
@Injectable({
  providedIn: 'root',
})
class CathegoryService extends __BaseService {
  static readonly getApiCathegoriesPath = '/api/cathegories';
  static readonly postApiCathegoriesPath = '/api/cathegories';
  static readonly putApiCathegoriesIdPath = '/api/cathegories/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  getApiCathegoriesResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/cathegories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  getApiCathegories(): __Observable<null> {
    return this.getApiCathegoriesResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  postApiCathegoriesResponse(body?: CathegoryViewModel): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/cathegories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body undefined
   */
  postApiCathegories(body?: CathegoryViewModel): __Observable<null> {
    return this.postApiCathegoriesResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CathegoryService.PutApiCathegoriesIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   */
  putApiCathegoriesIdResponse(params: CathegoryService.PutApiCathegoriesIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/cathegories/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CathegoryService.PutApiCathegoriesIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   */
  putApiCathegoriesId(params: CathegoryService.PutApiCathegoriesIdParams): __Observable<null> {
    return this.putApiCathegoriesIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CathegoryService {

  /**
   * Parameters for putApiCathegoriesId
   */
  export interface PutApiCathegoriesIdParams {
    id: string;
    body?: CathegoryViewModel;
  }
}

export { CathegoryService }
