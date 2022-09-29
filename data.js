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
          "yaw": 0.08859075118702009,
          "pitch": 0.242840682130538,
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
          "yaw": 0.17150388372859027,
          "pitch": 0.361856848485683,
          "rotation": 0,
          "target": "2-plotter"
        },
        {
          "yaw": 1.0427495421848914,
          "pitch": 0.2405151009528712,
          "rotation": 0.7853981633974483,
          "target": "5-almacn"
        },
        {
          "yaw": 3.017878045531563,
          "pitch": 0.25233993222174256,
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
          "yaw": 0.1628677097567124,
          "pitch": 0.17778070257466538,
          "rotation": 0,
          "target": "3-oficina-contabilidad"
        },
        {
          "yaw": -0.264560858831949,
          "pitch": 0.1864221206613763,
          "rotation": 0,
          "target": "4-oficina-principal"
        },
        {
          "yaw": 1.7489135970112901,
          "pitch": 0.23258187135256847,
          "rotation": 5.497787143782138,
          "target": "5-almacn"
        },
        {
          "yaw": 2.8242028302864384,
          "pitch": 0.4317050928056805,
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
          "yaw": 0.11715202960053617,
          "pitch": 0.2994649236688467,
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
          "yaw": -0.030969370913174643,
          "pitch": 0.24653980512383988,
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
