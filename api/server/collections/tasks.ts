import { MongoObservable } from 'meteor-rxjs';
import { Task } from '../models'

export const Tasks = new MongoObservable.Collection<Task>('tasks')