import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../models/project.model';
import {AuthenticationService} from '../../../common/services/authentication.service';
import {HttpService} from '../../../common/services/http.service';

@Injectable()
export class ProjectListService extends HttpService {

  private  URL = this.apiBaseURL;
  constructor(public http: HttpClient, public _authService: AuthenticationService) {
    super(http);
  }

  getAll(): Observable<Array<Project>> {
    const token = this._authService.user.api_token;
    return this.get(`${this.URL}/projects`, token);
  }

  deleteOne(project: Project): Observable<Project> {
    const token = this._authService.user.api_token;
    return this.delete(`${this.URL}/projects/${project.id}`, token);
  }
}
