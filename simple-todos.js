Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient){
    Template.body.helpers({
       tasks: function(){
           return Tasks.find({});
       }
    });

    Template.body.events({
        "submit .new-task": function(event){
            event.preventDefault()
            var text = event.target.text.value;
            Tasks.insert({
                text: text,
                createdAt: new Date()
            })

            event.target.text.value = "";
        }
    });
}