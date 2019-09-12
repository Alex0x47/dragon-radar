export const COLORS = {
    primary: "#ebab38",
    secondary: "#386724",
    primary_txt: "#ffffff",
    secondary_txt: "#ffffff",
    green_bg: '#28b025'
};

export const BUTTONS = {
    primary: { //play
        bg_color: COLORS.primary,
        txt_color: COLORS.primary_txt,
        padding: 14
    },
    gradient_primary: {
        start: 0,
        end: 0,
        startColor: 0,
        endColor: 0
    },
    secondary: { //settings
        bg_color: COLORS.secondary,
        txt_color: COLORS.primary_txt,
        padding: 14
    },
    gradient_secondary: {
        start: 0,
        end: 0,
        startColor: 0,
        endColor: 0
    }
};

const RADAR = {

};

const BALLS = {

};

const SIZES = {
    
};

const FONTS = {
    
}


export const MAP_STYLE = [
    {
      "stylers": [
        {
          "color": "#28b025"
        }
      ]
    },
    {
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "landscape.natural.terrain",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ];