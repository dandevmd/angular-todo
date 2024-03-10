import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itask } from '../shared/app-types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiUrl = 'http://localhost:3000/tasks';

  constructor(private axios: HttpClient) {}

  getTasks(): Observable<Itask[]> {
    return this.axios.get<Itask[]>(this.apiUrl);
  }

  deleteTask(task: Itask) {
    return this.axios.delete(`${this.apiUrl}/${task.id}`);
  }
  //   Using Event Emitters in Service:
  // Instead of emitting events from the child component, you could use an event emitter in the service to notify subscribers (such as the parent component) when an item is deleted.
  // deleteTask(task: Itask) {
  //   return this.httpClient.delete(`${this.apiUrl}/${task.id}`).pipe(
  //     tap(() => {
  //       this.taskDeleted.emit(task);
  //     })
  //   );
  // }

  updateTaskReminder(task: Itask) {
    return this.axios.put<Itask>(`${this.apiUrl}/${task.id}`, task);
  }

  postTask(task: Itask) {
    return this.axios.post<Itask>(this.apiUrl, task);
  }
}
