BEGIN;

-- je positionne mon groupe "dofusmarket_group_administration" comme propriétaire des schémas
CREATE SCHEMA web AUTHORIZATION dofusmarket_group_administration;

CREATE SCHEMA administration AUTHORIZATION dofusmarket_group_administration;

----------------------------------------------------------------------------
------- GESTION DES DROITS POUR oblog_web (membre du groupe oblog_group_web)
----------------------------------------------------------------------------
-- je donne le droit d'USAGE au groupe "dofusmarket_group_web"
-- ce doit d'USAGE au niveau des fonctions de mon schéma, va me permettre de les appeler
GRANT USAGE ON SCHEMA web TO dofusmarket_group_web;

GRANT USAGE ON SCHEMA administration TO dofusmarket_group_web;

-- je positionne le droit d'exécuter des fonctions au groupe "dofusmarket_group_web" au niveau du schéma "web"
ALTER DEFAULT PRIVILEGES FOR ROLE admin_dofusmarket IN SCHEMA web GRANT EXECUTE ON FUNCTIONS TO dofusmarket_group_web;

----------------------------------------------------------------------------
------- GESTION DES DROITS POUR oblog_web (membre du groupe oblog_group_web)
----------------------------------------------------------------------------
-- table pour gérer les utilisateurs de mon application web
CREATE TABLE administration."user" (
  id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
  pseudo text NOT NULL,
  email text NOT NULL,
  "password" text NOT NULL,
  "role" text NOT NULL DEFAULT 'user',
  profile_picture_id text NOT NULL,
  discord_pseudo text,
  discord_access_token text,
  discord_refresh_token text,
  CONSTRAINT valid_email CHECK (
    email ~ '^[A-Za-z0-9._+%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$'
  ) NOT VALID,
  CONSTRAINT valid_password CHECK (
    "password" ~ '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
  ) NOT VALID,
  PRIMARY KEY (id)
);

ALTER TABLE
  IF EXISTS administration."user"
ADD
  CONSTRAINT email UNIQUE (email) INCLUDE (email);

ALTER TABLE
  IF EXISTS administration."user"
ADD
  CONSTRAINT pseudo UNIQUE (pseudo) INCLUDE (pseudo);

ALTER TABLE
  IF EXISTS administration."user"
ADD
  COLUMN "resettimer" bigint;

-- GENERIC ITEM TABLE -- Table qui contient les items génériques ainsi que leur caractéristiques
CREATE TABLE web.items_generic (
  id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
  "type" text NOT NULL,
  categorie text NOT NULL,
  "name" text NOT NULL,
  niveau text NOT NULL,
  degats_neutre text,
  degats_neutre_secondaire text,
  degats_terre text,
  degats_terre_secondaire text,
  degats_feu text,
  degats_feu_secondaire text,
  degats_air text,
  degats_air_secondaire text,
  degats_eau text,
  degats_eau_secondaire text,
  vol_neutre text,
  vol_terre text,
  vol_feu text,
  vol_air text,
  vol_eau text,
  pdv_rendus text,
  "PA_perdus" text,
  "PA" text,
  "PM" text,
  vitalite text,
  sagesse text,
  "force" text,
  intelligence text,
  chance text,
  agilite text,
  dommage text,
  dommage_pourcent text,
  initiative text,
  prospection text,
  coup_critique text,
  "portée" text,
  soins text,
  invo text,
  pieges_fixes text,
  pieges_pourcent text,
  res_neutre_fixe text,
  res_neutre_pourcent text,
  res_terre_fixe text,
  res_terre_pourcent text,
  res_feu_fixe text,
  res_feu_pourcent text,
  res_eau_fixe text,
  res_eau_pourcent text,
  res_air_fixe text,
  res_air_pourcent text,
  pods text,
  renvoi_dommage text,
  echec_critique text,
  chasse text,
  vole_or text,
  "description" text NOT NULL,
  lien_image text NOT NULL,
  PRIMARY KEY (id)
);

--HDV-- Table qui contient l'ensemble des items mis en vente par les joueurs
CREATE TABLE web.hdv (
  id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
  vendeur_id integer NOT NULL,
  generic_item_id integer NOT NULL,
  serveur text NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT vendeur_id FOREIGN KEY (vendeur_id) REFERENCES administration."user" (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE NOT VALID,
  CONSTRAINT generic_item_id FOREIGN KEY (generic_item_id) REFERENCES web.items_generic (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE NOT VALID,
  degats_neutre_before integer,
  degats_neutre_after integer,
  degats_neutre_secondaire_before integer,
  degats_neutre_secondaire_after integer,
  degats_terre_before integer,
  degats_terre_after integer,
  degats_terre_secondaire_before integer,
  degats_terre_secondaire_after integer,
  degats_feu_before integer,
  degats_feu_after integer,
  degats_feu_secondaire_before integer,
  degats_feu_secondaire_after integer,
  degats_air_before integer,
  degats_air_after integer,
  degats_air_secondaire_before integer,
  degats_air_secondaire_after integer,
  degats_eau_before integer,
  degats_eau_after integer,
  degats_eau_secondaire_before integer,
  degats_eau_secondaire_after integer,
  vol_neutre_before integer,
  vol_neutre_after integer,
  vol_terre_before integer,
  vol_terre_after integer,
  vol_feu_before integer,
  vol_feu_after integer,
  vol_air_before integer,
  vol_air_after integer,
  vol_eau_before integer,
  vol_eau_after integer,
  pdv_rendus integer,
  PA_perdus integer,
  PA integer,
  PM integer,
  vitalite integer,
  sagesse integer,
  "force" integer,
  intelligence integer,
  chance integer,
  agilite integer,
  dommage integer,
  dommage_pourcent integer,
  initiative integer,
  prospection integer,
  coup_critique integer,
  "portée" integer,
  soins integer,
  invo integer,
  pieges_fixes integer,
  pieges_pourcent integer,
  res_neutre_fixe integer,
  res_neutre_pourcent integer,
  res_terre_fixe integer,
  res_terre_pourcent integer,
  res_feu_fixe integer,
  res_feu_pourcent integer,
  res_eau_fixe integer,
  res_eau_pourcent integer,
  res_air_fixe integer,
  res_air_pourcent integer,
  pods integer,
  renvoi_dommage integer,
  echec_critique integer,
  price integer NOT NULL
);

--FAVORIS-- Table qui recense les favoris de tous les joueurs
CREATE TABLE web.favoris (
  id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
  hdv_id integer NOT NULL,
  user_id integer NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT hdv_id FOREIGN KEY (hdv_id) REFERENCES web.hdv (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE NOT VALID,
  CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES administration."user" (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE NOT VALID
);

COMMIT;