import StationManager from './component/station-manager.js';
import EventHandler from './util/handler/event_handler/event_handler.js';

export default class SubwayMap {
  constructor() {
    this.roles = [new StationManager()];
  }

  activate() {
    const eventHandler = new EventHandler();

    this.roles.forEach(role =>
      eventHandler.handleClickEvent(role.buttonId, role.display, role)
    );
  }
}
