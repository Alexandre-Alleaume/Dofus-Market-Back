-- je crèe le rôle "admin_oblog" qui a tous les droits
CREATE ROLE admin_dofusmarket WITH LOGIN PASSWORD 'bouftou';

-- je crèe le rôle "web_dofusmarket" qui sera le compte utilisé par notre solution NodeJS pour se connecter à la bdd
CREATE ROLE web_dofusmarket WITH LOGIN PASSWORD 'tofu';

-- création des groupes
CREATE ROLE dofusmarket_group_web;

CREATE ROLE dofusmarket_group_administration;

-- ajout dans les groupes
GRANT dofusmarket_group_web TO web_dofusmarket;

GRANT dofusmarket_group_web TO admin_dofusmarket;

GRANT dofusmarket_group_administration TO admin_dofusmarket;

-- je crèe la BDD "oblog"
CREATE DATABASE dofusmarket OWNER admin_dofusmarket;