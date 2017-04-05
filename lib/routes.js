if(Meteor.isClient) {
    Accounts.onLogin(function(){
        FlowRouter.go('dashboard');
    });

    Accounts.onLogout(function(){
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()){
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
    name: 'home',
    action() {
        if(Meteor.userId()) {
            FlowRouter.go('dashboard')
        }
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Dashboard'});
    }
});

FlowRouter.route('/profile', {
    name: 'profile',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Profile'});
    }
});

FlowRouter.route('/diet', {
    name: 'diet',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Diet'});
    }
});