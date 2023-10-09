-- Verify dofusmarket:1.create_tables on pg
BEGIN;

-- Check if the 'user' exists in the 'administration' schema
SELECT
  table_name
FROM
  information_schema.tables
WHERE
  table_name = 'user'
  AND table_schema = 'administration';

-- Check if the 'items_generic' exists in the 'web' schema
SELECT
  table_name
FROM
  information_schema.tables
WHERE
  table_name = 'items_generic'
  AND table_schema = 'web';

-- Check if the 'hdv' exists in the 'web' schema
SELECT
  table_name
FROM
  information_schema.tables
WHERE
  table_name = 'hdv'
  AND table_schema = 'web';

-- Check if the 'favoris' exists in the 'web' schema
SELECT
  table_name
FROM
  information_schema.tables
WHERE
  table_name = 'favoris'
  AND table_schema = 'web';

--je viens énumérer les colonnes pour tester leur existence
-- SELECT
--   id,
--   pseudo,
--   email,
--   "password",
--   "role",
--   pseudo_ig,
--   profile_picture_id,
--   discord_access_token,
--   discord__refresh__token,
-- FROM
--   administration."user";
SELECT
  id,
  "type",
  categorie,
  "name",
  niveau,
  degats_neutre,
  degats_neutre_secondaire,
  degats_terre,
  degats_terre_secondaire,
  degats_feu,
  degats_feu_secondaire,
  degats_air,
  degats_air_secondaire,
  degats_eau,
  degats_eau_secondaire,
  vol_neutre,
  vol_terre,
  vol_feu,
  vol_air,
  vol_eau,
  pdv_rendus,
  "PA_perdus",
  "PA",
  "PM",
  vitalite,
  sagesse,
  "force",
  intelligence,
  chance,
  agilite,
  dommage,
  dommage_pourcent,
  initiative,
  prospection,
  coup_critique,
  "portée",
  soins,
  invo,
  pieges_fixes,
  pieges_pourcent,
  res_neutre_fixe,
  res_neutre_pourcent,
  res_terre_fixe,
  res_terre_pourcent,
  res_feu_fixe,
  res_feu_pourcent,
  res_eau_fixe,
  res_eau_pourcent,
  res_air_fixe,
  res_air_pourcent,
  pods,
  renvoi_dommage,
  echec_critique,
  chasse,
  vole_or,
  "description",
  lien_image,
FROM
  web.items_generic;

-- SELECT
--   id,
--   vendeur_id,
--   generic_item_id,
--   "type",
--   categorie,
--   "name",
--   niveau,
--   degats_neutre_before,
--   degats_neutre_after,
--   degats_neutre_secondaire_before,
--   degats_neutre_secondaire_after,
--   degats_terre_before,
--   degats_terre_after,
--   degats_terre_secondaire_before,
--   degats_terre_secondaire_after,
--   degats_feu_before,
--   degats_feu_after,
--   degats_feu_secondaire_before,
--   degats_feu_secondaire_after,
--   degats_air_before,
--   degats_air_after,
--   degats_air_secondaire_before,
--   degats_air_secondaire_after,
--   degats_eau_before,
--   degats_eau_after,
--   degats_eau_secondaire_before,
--   degats_eau_secondaire_after,
--   vol_neutre_before,
--   vol_neutre_after,
--   vol_terre_before,
--   vol_terre_after,
--   vol_feu_before,
--   vol_feu_after,
--   vol_air_before,
--   vol_air_after,
--   vol_eau_before,
--   vol_eau_after,
--   pdv_rendus,
--   "PA_perdus",
--   "PA",
--   "PM",
--   vitalite,
--   sagesse,
--   "force",
--   intelligence,
--   chance,
--   agilite,
--   dommage,
--   dommage_pourcent,
--   initiative,
--   prospection,
--   coup_critique,
--   "portée",
--   soins,
--   invo,
--   pieges_fixes,
--   pieges_pourcent,
--   res_neutre_fixe,
--   res_neutre_pourcent,
--   res_terre_fixe,
--   res_terre_pourcent,
--   res_feu_fixe,
--   res_feu_pourcent,
--   res_eau_fixe,
--   res_eau_pourcent,
--   res_air_fixe,
--   res_air_pourcent,
--   pods,
--   renvoi_dommage,
--   echec_critique,
--   chasse,
--   vole_or,
--   "description",
--   lien_image,
--   price
-- FROM
--   web.hdv;
SELECT
  id,
  hdv_id,
  user_id
FROM
  web.favoris;

ROLLBACK;