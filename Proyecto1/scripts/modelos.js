class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description=description;
        this.imgUrl=imgUrl;
    }
}
class Repository {
    constructor() {
        this.activities = [];
    }
    
    getAllActivities(){
        return this.activities;
    }

    createActivity(id, title, description, imgUrl) {
        let activity = new Activity(id, title, description, imgUrl);
        this.activities.push(activity);
        return activity;
    }

    deleteActivity(id){
        this.activities = this.activities.filter(activity => activity.id !== id);
    }
}