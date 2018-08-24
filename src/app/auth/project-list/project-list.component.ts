import { Component, OnInit } from '@angular/core';
import {ProjectListService} from './services/project-list.service';
import {Project} from './models/project.model';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  isLoading = true;
  projects: Array<Project>;
  constructor(private projectListService: ProjectListService) { }

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectListService.getAll().subscribe(
      (data: Project[]) => {
        // next
        this.projects = data;
        this.isLoading = false;
        console.log(data);
      },
      error1 => {console.error(error1);
      },
      () => {
        console.log('Finished!');
      }
    );
  }
  onDeleteProject(project: Project) {
    // http://localhost:8085/projects/1
    this.projectListService.deleteOne(project).subscribe(
      (data: Project) => {
        // next
        this.isLoading = false;
        console.log(data);
        this.getAllProjects();
      },
      error1 => {console.error(error1);
      },
      () => {
        console.log('Finished!');
      }
    );
    console.log('Delete clicked!');
  }
  setData(sortedData) {
    this.projects = sortedData;
  }
}
