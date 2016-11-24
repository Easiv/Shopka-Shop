import Ember from 'ember';

export default Ember.Controller.extend({
  leftSideBarOpen: false,

  actions: {
    toggleSideNav() {
      this.toggleProperty('leftSideBarOpen');
      
    }
  }
});
