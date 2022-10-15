var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.27747152963498145,
          "pitch": 0.3039282066556428,
          "rotation": 0,
          "target": "1-puestos-de-trabajo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-puestos-de-trabajo",
      "name": "Puestos de trabajo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.333537362278312,
          "pitch": 0.36231486967028204,
          "rotation": 0,
          "target": "2-plotter"
        },
        {
          "yaw": 2.9892751078296964,
          "pitch": 0.1778750157478619,
          "rotation": 0.7853981633974483,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-plotter",
      "name": "Plotter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1332240690445019,
          "pitch": 0.08353050639744986,
          "rotation": 0.7853981633974483,
          "target": "4-oficina-auxiliar"
        },
        {
          "yaw": -0.20345775351293582,
          "pitch": 0.0795041689188487,
          "rotation": 5.497787143782138,
          "target": "3-oficina-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-oficina-principal",
      "name": "Oficina Principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04659843553989873,
          "pitch": 0.15837060453014828,
          "rotation": 5.497787143782138,
          "target": "2-plotter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-oficina-auxiliar",
      "name": "Oficina Auxiliar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.33679348224132255,
          "pitch": 0.22559568427237053,
          "rotation": 0,
          "target": "2-plotter"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "AVP DIMMEC S.A.S",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
