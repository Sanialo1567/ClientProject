/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { WebPortalViewModel } from '../models/web-portal-view-model';
@Injectable({
  providedIn: 'root',
})
class WebPortalService extends __BaseService {
  static readonly getApiWebPortalsPath = '/api/webPortals';
  static readonly postApiWebPortalsPath = '/api/webPortals';
  static readonly getListFilterPath = '/list/{filter}';
  static readonly getApiWebPortalsIdUserIdPath = '/api/webPortals/{id}/{userId}';
  static readonly getApiWebPortalsCathegoryCathegoryIdPath = '/api/webPortals/cathegory/{cathegoryId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  getApiWebPortalsResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/webPortals`,
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
  }  getApiWebPortals(): __Observable<null> {
    return this.getApiWebPortalsResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  postApiWebPortalsResponse(body?: WebPortalViewModel): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/webPortals`,
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
  postApiWebPortals(body?: WebPortalViewModel): __Observable<null> {
    return this.postApiWebPortalsResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param filter undefined
   */
  getListFilterResponse(filter: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/list/${encodeURIComponent(String(filter))}`,
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
   * @param filter undefined
   */
  getListFilter(filter: string): __Observable<null> {
    return this.getListFilterResponse(filter).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `WebPortalService.GetApiWebPortalsIdUserIdParams` containing the following parameters:
   *
   * - `userId`:
   *
   * - `id`:
   */
  getApiWebPortalsIdUserIdResponse(params: WebPortalService.GetApiWebPortalsIdUserIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/webPortals/${encodeURIComponent(String(params.id))}/${encodeURIComponent(String(params.userId))}`,
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
   * @param params The `WebPortalService.GetApiWebPortalsIdUserIdParams` containing the following parameters:
   *
   * - `userId`:
   *
   * - `id`:
   */
  getApiWebPortalsIdUserId(params: WebPortalService.GetApiWebPortalsIdUserIdParams): __Observable<null> {
    return this.getApiWebPortalsIdUserIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param cathegoryId undefined
   */
  getApiWebPortalsCathegoryCathegoryIdResponse(cathegoryId: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/webPortals/cathegory/${encodeURIComponent(String(cathegoryId))}`,
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
   * @param cathegoryId undefined
   */
  getApiWebPortalsCathegoryCathegoryId(cathegoryId: string): __Observable<null> {
    return this.getApiWebPortalsCathegoryCathegoryIdResponse(cathegoryId).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module WebPortalService {

  /**
   * Parameters for getApiWebPortalsIdUserId
   */
  export interface GetApiWebPortalsIdUserIdParams {
    userId: string;
    id: string;
  }
}

export { WebPortalService }
