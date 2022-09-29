var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala-de-estar",
      "name": "Sala de estar",
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
          "yaw": 0.07977130589595127,
          "pitch": 0.23883928015142253,
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
          "yaw": 0.197253582140533,
          "pitch": 0.3792005297479619,
          "rotation": 0,
          "target": "2-plotter"
        },
        {
          "yaw": 0.9734424184264583,
          "pitch": 0.2139949075306884,
          "rotation": 0.7853981633974483,
          "target": "5-almacn"
        },
        {
          "yaw": 3.055889206633948,
          "pitch": 0.23954948621523542,
          "rotation": 0,
          "target": "0-sala-de-estar"
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
          "yaw": 0.1324548348775334,
          "pitch": 0.22503986865231518,
          "rotation": 0,
          "target": "3-oficina-contabilidad"
        },
        {
          "yaw": 1.781998179952244,
          "pitch": 0.23341375047110624,
          "rotation": 5.497787143782138,
          "target": "5-almacn"
        },
        {
          "yaw": -0.22696261709327992,
          "pitch": 0.21307859115255035,
          "rotation": 0,
          "target": "4-oficina-principal"
        },
        {
          "yaw": 2.8614216040942093,
          "pitch": 0.4329861376611266,
          "rotation": 0,
          "target": "1-puestos-de-trabajo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-oficina-contabilidad",
      "name": "Oficina contabilidad",
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
          "yaw": 0.12371748591404952,
          "pitch": 0.2810324319662172,
          "rotation": 0,
          "target": "2-plotter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-oficina-principal",
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
          "yaw": -0.031078126667019035,
          "pitch": 0.3073329341484481,
          "rotation": 0,
          "target": "2-plotter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-almacn",
      "name": "Almacén",
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
          "yaw": -2.862443055091349,
          "pitch": 0.1501765239153059,
          "rotation": 13.351768777756625,
          "target": "2-plotter"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ALEJANDRO VELÁSQUEZ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
