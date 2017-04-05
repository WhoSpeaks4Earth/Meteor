import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const DietAssessments = new Mongo.Collection('dietAssessments');
 
Meteor.methods({
  'dietAssessments.insert'(text) {
    check(text, String);
 
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
 
    DietAssessments.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'dietAssessments.remove'(dietAssessmentId) {
    check(dietAssessmentId, String);
 
    DietAssessments.remove(dietAssessmentId);
  },
  'dietAssessments.setChecked'(dietAssessmentId, setChecked) {
    check(dietAssessmentId, String);
    check(setChecked, Boolean);
 
    DietAssessments.update(dietAssessmentId, { $set: { checked: setChecked } });
  },
});