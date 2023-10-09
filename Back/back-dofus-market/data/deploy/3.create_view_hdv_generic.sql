BEGIN;

CREATE VIEW web.hdv_generic AS
SELECT
    web.hdv.id AS id,
    web.hdv.vendeur_id AS vendeur_id,
    web.hdv.generic_item_id AS generic_item_id,
    web.items_generic."type" AS "type",
    web.items_generic.categorie AS categorie,
    web.items_generic."name" AS "name",
    web.items_generic.niveau AS niveau,
    web.hdv.degats_neutre_before AS degats_neutre_before,
    web.hdv.degats_neutre_after AS degats_neutre_after,
    web.hdv.degats_neutre_secondaire_before AS degats_neutre_secondaire_before,
    web.hdv.degats_neutre_secondaire_after AS degats_neutre_secondaire_after,
    web.hdv.degats_terre_before AS degats_terre_before,
    web.hdv.degats_terre_after AS degats_terre_after,
    web.hdv.degats_terre_secondaire_before AS degats_terre_secondaire_before,
    web.hdv.degats_terre_secondaire_after AS degats_terre_secondaire_after,
    web.hdv.degats_feu_before AS degats_feu_before,
    web.hdv.degats_feu_after AS degats_feu_after,
    web.hdv.degats_feu_secondaire_before AS degats_feu_secondaire_before,
    web.hdv.degats_feu_secondaire_after AS degats_feu_secondaire_after,
    web.hdv.degats_air_before AS degats_air_before,
    web.hdv.degats_air_after AS degats_air_after,
    web.hdv.degats_air_secondaire_before AS degats_air_secondaire_before,
    web.hdv.degats_air_secondaire_after AS degats_air_secondaire_after,
    web.hdv.degats_eau_before AS degats_eau_before,
    web.hdv.degats_eau_after AS degats_eau_after,
    web.hdv.degats_eau_secondaire_before AS degats_eau_secondaire_before,
    web.hdv.degats_eau_secondaire_after AS degats_eau_secondaire_after,
    web.hdv.vol_neutre_before AS vol_neutre_before,
    web.hdv.vol_neutre_after AS vol_neutre_after,
    web.hdv.vol_terre_before AS vol_terre_before,
    web.hdv.vol_terre_after AS vol_terre_after,
    web.hdv.vol_feu_before AS vol_feu_before,
    web.hdv.vol_feu_after AS vol_feu_after,
    web.hdv.vol_air_before AS vol_air_before,
    web.hdv.vol_air_after AS vol_air_after,
    web.hdv.vol_eau_before AS vol_eau_before,
    web.hdv.vol_eau_after AS vol_eau_after,
    web.hdv.pdv_rendus AS pdv_rendus,
    web.hdv.PA_perdus AS PA_perdus,
    web.hdv.PA AS PA,
    web.hdv.PM AS PM,
    web.hdv.vitalite AS vitalite,
    web.hdv.sagesse AS sagesse,
    web.hdv."force" AS "force",
    web.hdv.intelligence AS intelligence,
    web.hdv.chance AS chance,
    web.hdv.agilite AS agilite,
    web.hdv.dommage AS dommage,
    web.hdv.dommage_pourcent AS dommage_pourcent,
    web.hdv.initiative AS initiative,
    web.hdv.prospection AS prospection,
    web.hdv.coup_critique AS coup_critique,
    web.hdv."portée" AS "portée",
    web.hdv.soins AS soins,
    web.hdv.invo AS invo,
    web.hdv.pieges_fixes AS pieges_fixes,
    web.hdv.pieges_pourcent AS pieges_pourcent,
    web.hdv.res_neutre_fixe AS res_neutre_fixe,
    web.hdv.res_neutre_pourcent AS res_neutre_pourcent,
    web.hdv.res_terre_fixe AS res_terre_fixe,
    web.hdv.res_terre_pourcent AS res_terre_pourcent,
    web.hdv.res_feu_fixe AS res_feu_fixe,
    web.hdv.res_feu_pourcent AS res_feu_pourcent,
    web.hdv.res_eau_fixe AS res_eau_fixe,
    web.hdv.res_eau_pourcent AS res_eau_pourcent,
    web.hdv.res_air_fixe AS res_air_fixe,
    web.hdv.res_air_pourcent AS res_air_pourcent,
    web.hdv.pods AS pods,
    web.hdv.renvoi_dommage AS renvoi_dommage,
    web.hdv.echec_critique AS echec_critique,
    web.items_generic.chasse AS chasse,
    web.items_generic.vole_or AS vole_or,
    web.items_generic."description" AS "description",
    web.items_generic.lien_image AS lien_image,
    web.hdv.serveur AS serveur,
    web.hdv.price AS price,
    administration.user.pseudo AS vendeur_pseudo,
    administration.user.discord_pseudo AS discord_pseudo
FROM
    web.hdv
    INNER JOIN web.items_generic ON web.items_generic.id = web.hdv.generic_item_id
    INNER JOIN administration.user ON administration.user.id = web.hdv.vendeur_id;

COMMIT;