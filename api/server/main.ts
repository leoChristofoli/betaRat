import { Meteor } from 'meteor/meteor';
import { Tasks } from './collections/tasks'

Meteor.startup(() => {
  // code to run on server at startup
  if (Tasks.find({}).cursor.count() === 0) {

    Tasks.collection.insert({
      title: 'Task1',
      description: 'do this'
    });

    Tasks.collection.insert({
      title: 'Task2',
      description: 'do that'
    });

  }
});
