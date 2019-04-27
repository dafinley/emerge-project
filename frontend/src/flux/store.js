import { EventEmitter } from "events";

import Dispatcher from "./dispatcher";
import Constants from "./constants";
import getSidebarNavItems from "../data/sidebar-nav-items";

let _store = {
  menuVisible: false,
  navItems: getSidebarNavItems(),
  origin: {lat: 25.729775, lng: -80.18696899999999},
  destination: { lat: 25.729775, lng: -80.18696899999999},
  showOriginOnly: false
};

class Store extends EventEmitter {
  constructor() {
    super();

    this.registerToActions = this.registerToActions.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.updateOrigin = this.updateOrigin.bind(this);
    this.updateDestination = this.updateDestination.bind(this);
    this.updateOriginOnly = this.updateOriginOnly.bind(this);

    Dispatcher.register(this.registerToActions.bind(this));
  }

  registerToActions({ actionType, payload }) {
    switch (actionType) {
      case Constants.TOGGLE_SIDEBAR:
        this.toggleSidebar();
        break;
      case Constants.UPDATE_ORIGIN:
        this.updateOrigin(payload);
        break;
      case Constants.UPDATE_ORIGIN_ONLY:
        this.updateOriginOnly(payload);
        break;
      case Constants.UPDATE_DESTINATION:
        this.updateDestination(payload);
        break;
      default:
    }
  }

  toggleSidebar() {
    _store.menuVisible = !_store.menuVisible;
    this.emit(Constants.CHANGE);
  }

  updateOrigin(payload){
    _store.origin = payload;
    this.emit(Constants.CHANGE);
  }

  updateOriginOnly(payload){
    _store.showOriginOnly = payload;
  }

  updateDestination(payload){
    _store.destination = payload;
    this.emit(Constants.CHANGE);
  }

  getMenuState() {
    return _store.menuVisible;
  }

  getSidebarItems() {
    return _store.navItems;
  }

  getOrigin(){
    return _store.origin;
  }

  getShowOriginOnly(){
    return _store.showOriginOnly;
  }

  getDestination(){
    return _store.destination;
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE, callback);
  }
}

export default new Store();