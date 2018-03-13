import { Injectable }     from '@angular/core';
import {
  HttpService,
  GET,
  POST,
  PUT,
  DELETE,
  Path,
  Adapter,
  Produces,
  MediaType,
  Body
}                         from '../../../../shared/asyncServices/http';
import { Observable }     from 'rxjs/Observable';
import { UserService }    from './user.service';
import UserForm           from '../models/user-form.model';

@Injectable()
export class UserApiClient extends HttpService {

  /**
   * Retrieves all users
   */
  @GET("users")
  @Adapter(UserService.gridAdapter)
  public all(): Observable<any> { return null; };

  /**
   * Get user by ID
   */
  @GET("users/{id}")
  @Adapter(UserService.userDetailsAdapter)
  public get(@Path("id") id: number): Observable<any> { return null; };

  /**
   * Create new user
   */
  @POST("users")
  @Adapter(UserService.createUserAdapter)
  @Produces(MediaType.FORM_DATA)
  public create(@Body form: UserForm): Observable<any> { return null; };

  /**
   * Update new user
   */
  @PUT("users/{id}")
  @Adapter(UserService.createUserAdapter)
  @Produces(MediaType.FORM_DATA)
  public update(@Body form: UserForm, @Path("id") id: number): Observable<any> { return null; };
}