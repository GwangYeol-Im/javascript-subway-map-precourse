// constants (eng)

// active
export const ACTIVE = 'active';

// app
export const APP = 'app';

// local storage
export const STATIONS_LS = 'stations';
export const LINES_LS = 'lines';

// role
export const ROLE = 'role';
export const ROLE_SECTION = 'role-section';
export const ROLE_BUTTON = 'role-button';
export const ROLE_BUTTON_SECTION = 'role-button-section';

// station manager
export const STATION = 'station';
export const STATION_MANAGER = 'station-manager';
export const STATION_MANAGER_BUTTON = 'station-manager-button';
export const STATION_ADD_BUTTON = 'station-add-button';
export const STATION_DELETE_BUTTON = 'station-delete-button';
export const STATION_NAME_INPUT = 'station-name-input';
export const STATION_TABLE = 'station-table';
export const STATION_ROW = 'station-row';
export const STATION_ALERT_INVALID =
  '일치하는 역 이름이 없네요. 😅\n실제 지하철 역만 추가할 수 있어요!';
export const STATION_ALERT_OVERLAP = '이미 추가한 역이에요. 😅';
export const STATION_ALERT_HAS_LINE = '노선에 추가한 역은 삭제할 수 없어요!';

// line manager;
export const LINE_MANAGER = 'line-manager';
export const LINE_MANAGER_BUTTON = 'line-manager-button';
export const LINE_ADD_BUTTON = 'line-add-button';
export const LINE_DELETE_BUTTON = 'line-delete-button';
export const LINE_NAME_INPUT = 'line-name-input';
export const LINE_START_STATION_SELECTOR = 'line-start-station-selector';
export const LINE_END_STATION_SELECTOR = 'line-end-station-selector';

// section manager;
export const SECTION_MANAGER = 'section-manager';
export const SECTION_LINE_MENU_BUTTON = 'section-line-menu-button';
export const SECTION_ADD_BUTTON = 'section-add-button';
export const SECTION_DELETE_BUTTON = 'section-delete-button';
export const SECTION_ORDER_INPUT = 'section-order-input';
export const SECTION_STAION_SELECTOR = 'section_station_selector';

// map print manager;
export const MAP = 'map';
export const MAP_PRINT_MANAGER_BUTTON = 'map-print-manager-button';

// fetch url
export const STATION_URL = 'http://openapi.seoul.go.kr:8088';
export const STATION_KEY = '4b75656e576d6b69313236656b74766a';
export const STATION_FORMAT = 'json';
export const STATION_INFO = 'SearchSTNBySubwayLineInfo';
export const STATION_ROW_START = '1';
export const STATION_ROW_END = '730';
export const STATION_FETCH_URL = `${STATION_URL}/${STATION_KEY}/${STATION_FORMAT}/${STATION_INFO}/${STATION_ROW_START}/${STATION_ROW_END}`;

// constants (kor)
export const DELETE_K = '삭제';
export const STATION_MANAGER_K = '역 관리';
export const LINE_MANAGER_K = '노선 관리';
export const SECTION_LINE_MANAGER_K = '구간 관리';
export const SECTION_LINE_DELETE_K = '노선에서 제거';
export const MAP_PRINT_MANAGER_K = '지하철 노선도 출력';

export const ROLE_NAMES = [
  '',
  STATION_MANAGER_K,
  LINE_MANAGER_K,
  SECTION_LINE_MANAGER_K,
  MAP_PRINT_MANAGER_K,
];
