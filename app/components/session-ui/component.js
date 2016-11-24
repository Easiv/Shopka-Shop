import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['layout-row', 'layout-align-center-center'],
  session: Ember.inject.service(),
  actions: {
    signIn: function() {
      this.get('session').open('firebase', { provider: 'google'}).then(function(data) {
        console.log(data.currentUser);
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
