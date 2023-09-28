import Tesseract from "tesseract.js";

export const screenService = {
  createItemCarac: (str, obj, value) => {
    if (str.includes("Dommages :") && str.includes("(neutre)")&&value) {
      obj.degats_neutre_before = value[0];
      obj.degats_neutre_after = value[1];
      return obj;
    }
    if (str.includes("Dommages :") && str.includes("(neutre)")&&value) {
      obj.degats_neutre_secondaire_before = value[0];
      obj.degats_neutre_secondaire_after = value[1];
      return obj;
    }
    if (str.includes("Dommages :") && str.includes("(terre)")&&value) {
      obj.degats_terre_before = value[0];
      obj.degats_terre_after = value[1];
      return obj;
    }
    if (str.includes("Dommages :") && str.includes("(terre)")&&value) {
      obj.degats_terre_secondaire_before = value[0];
      obj.degats_terre_secondaire_after = value[1];
      return obj;
    }
    if (str.includes("Dommages :") && str.includes("(feu)")&&value) {
      obj.degats_feu_before = value[0];
      obj.degats_feu_after = value[1];
      return obj;
    }
    if (str.includes("Dommages :") && str.includes("(feu)")&&value) {
      obj.degats_feu_secondaire_before = value[0];
      obj.degats_feu_secondaire_after = value[1];
      return obj;
    }
    if (str.includes("Dommages :") && str.includes("(air)")&&value) {
      obj.degats_air_before = value[0];
      obj.degats_air_after = value[1];
      return obj;
    }
    if (str.includes("Dommages :") && str.includes("(air)")&&value) {
      obj.degats_air_secondaire_before = value[0];
      obj.degats_air_secondaire_after = value[1];
      return obj;
    }
    if (str.includes("Dommages :") && str.includes("(eau)")&&value) {
      obj.degats_eau_before = value[0];
      obj.degats_eau_after = value[1];
      return obj;
    }
    if (str.includes("Dommages :") && str.includes("(eau)")&&value) {
      obj.degats_eau_secondaire_before = value[0];
      obj.degats_eau_secondaire_after = value[1];
      return obj;
    }
    if (str.includes("Vole") && str.includes("(neutre)")&&value) {
      obj.vol_neutre_before = value[0];
      obj.vol_neutre_after = value[1];
      return obj;
    }
    if (str.includes("Vole") && str.includes("(terre)")&&value) {
      obj.vol_terre_before = value[0];
      obj.vol_terre_after = value[1];
      return obj;
    }
    if (str.includes("Vole") && str.includes("(feu)")&&value) {
      obj.vol_feu_before = value[0];
      obj.vol_feu_after = value[1];
      return obj;
    }
    if (str.includes("Vole") && str.includes("(air)")&&value) {
      obj.vol_air_before = value[0];
      obj.vol_air_after = value[1];
      return obj;
    }
    if (str.includes("Vole") && str.includes("(eau)")&&value) {
      obj.vol_eau_before = value[0];
      obj.vol_eau_after = value[1];
      return obj;
    }

    if (str.includes("PA")&&value) {
       obj.PA = value[0];
      return obj;
    }
    if (str.includes("PM")&&value) {
      obj.PM = value[0];
      return obj;
    }
    if (str.includes("agilité")&&value) {
      obj.agilite = value[0];
      return obj;
    }
    if (str.includes("force")&&value) {
      obj.force = value[0];
      return obj;
    }
    if (str.includes("chance")&&value) {
      obj.chance = value[0];
      return obj;
    }
    if (str.includes("intelligence")&&value) {
      obj.intelligence = value[0];
      return obj;
    }
    if (str.includes("sagesse")&&value) {
      obj.sagesse = value[0];
      return obj;
    }
    if (str.includes("vitalité")&&value) {
      obj.vitalite = value[0];
      return obj;
    }
    if (str.includes("initiative")&&value) {
      obj.initiative = value[0];
      return obj;
    }
    if (str.includes("Augmente les dommages de")&&value) {
      obj.dommage_pourcent = value[0];
      return obj;
    }
    if (str.includes("coups critiques")&&value) {
      obj.coup_critique = value[0];
      return obj;
    }
    if (str.includes("portée")&&value) {
      obj.portée = value[0];
      return obj;
    }
    if (str.includes("dommages aux pièges") && !str.includes("%")&&value) {
      obj.pieges_fixes = value[0];
      return obj;
    }
    if (str.includes("% de dommages aux pièges")&&value) {
      obj.pieges_pourcent = value[0];
      return obj;
    }
    if (str.includes("de résistance à l'eau" && !str.includes("%"))&&value) {
      obj.res_eau_fixe = value[0];
      return obj;
    }
    if (str.includes("% de résistance à l'eau")) {
      obj.res_eau_pourcent = value[0];
      return obj;
    }
    if (str.includes("de résistance à la terre" && !str.includes("%"))&&value) {
      obj.res_terre_fixe = value[0];
      return obj;
    }
    if (str.includes("% de résistance à la terre")&&value) {
      obj.res_terre_pourcent = value[0];
      return obj;
    }
    if (str.includes("de résistance au feu")&&value) {
      obj.res_feu_fixe = value[0];
      return obj;
    }
    if (str.includes("% de résistance au feu")&&value) {
      obj.res_feu_pourcent = value[0];
      return obj;
    }
    if (str.includes("de résistance à l'air") && !str.includes("%")&&value) {
      obj.res_air_fixe = value[0];
      return obj;
    }
    if (str.includes("% de résistance à l'air")&&value) {
      obj.res_air_pourcent = value[0];
      return obj;
    }
    if (str.includes("de résistance neutre" && !str.includes("%"))&&value) {
      obj.res_neutre_fixe = value[0];
      return obj;
    }
    if (str.includes("% de résistance neutre")&&value) {
      obj.res_neutre_pourcent = value[0];
      return obj;
    }
    if (str.includes("prospection")&&value) {
      obj.prospection = value[0];
      return obj;
    }
    if (
      !str.includes("Augmente les dommages de") &&
      str.includes("dommages") &&
      !str.includes("pièges")
      &&value) {
      obj.dommage = value[0];
      return obj;
    }
    if (str.includes("soins")&&value) {
      obj.soins = value[0];
      return obj;
    }
    if (str.includes("invocables")&&value) {
      obj.invo = value[0];
      return obj;
    }
    if (str.includes("poids portable")&&value) {
      obj.pods = value[0];
      return obj;
    }
    if (str.includes("prospection")&&value) {
      obj.prospection = value[0];
      return obj;
    }
    if (str.includes("renvoie")&&value) {
      obj.renvoi_dommage = value[0];
      return obj;
    }
    if (str.includes("échecs critiques")&&value) {
      obj.checs_critiques = value[0];
      return obj;
    }
    return obj;
  },
  getScreenCarac: async (rectangle, url, itemObj) => {
    const worker = await Tesseract.createWorker();
    await worker.loadLanguage("fra");
    await worker.initialize("fra");
    const {
      data: { text },
    } = await worker.recognize(url, { rectangle });
    let str = text.trim();

    const regex = /\d+/g;
    const numbersArray = str.match(regex);
    console.log("Hello screen carac",str);

    itemObj = screenService.createItemCarac(str, itemObj, numbersArray);
    return itemObj;
  },
  getScreenName: async (rectangle, urlArray, itemObj) => {
    const worker = await Tesseract.createWorker();
    await worker.loadLanguage("fra");
    await worker.initialize("fra");
    const {
      data: { text },
    } = await worker.recognize(urlArray, { rectangle });
    let str = text.trim();
    str = str.replace(/[0-9]/g, "");
    itemObj.name = str;
    await worker.terminate();
    return itemObj;
  },
  screenCarac2: async (urlArray) => {
    let itemObj = {};
    //Screen de chaque carac et save dans l'itemObj

    for (let i = 1; i <= 10; i++) {
      let rectangle;
      if (i > 1) {
        rectangle = {
          left: 280,
          top: 130 + 65 * (i - 1),
          width: 640,
          height: 65,
        };
      } else {
        rectangle = {
          left: 280,
          top: 130,
          width: 640,
          height: 65,
        };
      }
      itemObj = await screenService.getScreenCarac(
        rectangle,
        urlArray,
        itemObj
      );
    }

    return itemObj;
  },
  screenName2: async (urlArray) => {
    let name = {};
    const rectangle = {
      left: 20,
      top: 0,
      width: 810,
      height: 60,
    };

    name = await screenService.getScreenName(rectangle, urlArray, name);

    return name;
  },
};
