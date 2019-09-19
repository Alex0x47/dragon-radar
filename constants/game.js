export const RANGE = 30; //metres between user and farest DB
export const DISTANCE_TO_FIND_DB = 5; //obviously has to be < than range

export const ZOOM_LEVELS = [{
    id: 1,
    col: 15,
    row: 20,
    zoom: 16
  },
  {
    id: 2,
    col: 10,
    row: 14,
    zoom: 17
  },
  {
    id: 3,
    col: 6,
    row: 9,
    zoom: 18
  },
  {
    id: 4,
    col: 3,
    row: 4,
    zoom: 19
  },
];

export let DRAGON_BALLS = [{
    id: 1,
    found: false,
    showOnMap: true,
    image_path: require('../assets/images/ball1.png'),
  },
  {
    id: 2,
    found: false,
    showOnMap: true,
    image_path: require('../assets/images/ball2.png'),
  },
  {
    id: 3,
    found: false,
    showOnMap: true,
    image_path: require('../assets/images/ball3.png'),
  },
  {
    id: 4,
    found: false,
    showOnMap: true,
    image_path: require('../assets/images/ball4.png'),
  },
  {
    id: 5,
    found: false,
    showOnMap: true,
    image_path: require('../assets/images/ball5.png'),
  },
  {
    id: 6,
    found: false,
    showOnMap: true,
    image_path: require('../assets/images/ball6.png'),
  },
  {
    id: 7,
    found: false,
    showOnMap: true,
    image_path: require('../assets/images/ball7.png'),
  },
];

export let COLUMNS_NUMBER = 12;
export let ROW_NUMBER = 18;


const fakeDB = [{
    "found": true,
    "id": 1,
    "image_path": 1,
    "latitude": 37.78614947697102,
    "longitude": -122.40645457519852,
  },
  {
    "found": false,
    "id": 2,
    "image_path": 2,
    "latitude": 37.785549596906705,
    "longitude": -122.4061751026752,
  },
  {
    "found": false,
    "id": 3,
    "image_path": 3,
    "latitude": 37.78560261601405,
    "longitude": -122.4068477367249,
  },
  {
    "found": false,
    "id": 4,
    "image_path": 4,
    "latitude": 37.78562864129182,
    "longitude": -122.40671457050932,
  },
  {
    "found": false,
    "id": 5,
    "image_path": 5,
    "latitude": 37.78579030559536,
    "longitude": -122.40647931426004,
  },
  {
    "found": false,
    "id": 6,
    "image_path": 6,
    "latitude": 37.78572363508943,
    "longitude": -122.40607045020161,
  },
  {
    "found": false,
    "id": 7,
    "image_path": 7,
    "latitude": 37.785762904666655,
    "longitude": -122.40696618214862,
  }
];