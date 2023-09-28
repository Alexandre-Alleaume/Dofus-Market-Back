# Init de la db

export PGUSER=pumalicieux

## suppression de l'existant
dropdb dofusmarket
dropuser admin_dofusmarket
dropuser web_dofusmarket
dropuser dofusmarket_group_web;
dropuser dofusmarket_group_administration;
echo "BDD dofusmarket, users, and role deleted"

## ajout du role et de la bdd
psql -f ./data/script/sql/init_db.sql
echo "BDD dofusmarket créée"

## suppression du schéma public
psql -d dofusmarket -f ./data/script/sql/delete_public.sql


##########################
# Initialisation de Sqitch

rm ./data/sqitch.conf
rm ./data/sqitch.plan
#rm -r deploy
#rm -r revert
#rm -r verify
cd data ## je me place dans le folder data pour initialiser Sqitch
sqitch init dofusmarket --engine pg --target db:pg:dofusmarket


# ## ajout des tables
# export PGUSER=admin_dofusmarket
# export PGPASSWORD=bouftou
# export PGDATABASE=dofusmarket

# psql -f ./script/sql/create_tables.sql

# ## ajout de la vue
# psql -f ./script/sql/add_view.sql

# ## ajout des fonctions
# psql -f ./script/sql/fonctions/category.sql
# psql -f ./script/sql/fonctions/post.sql
# psql -f ./script/sql/fonctions/user.sql


# ## import des données
# node script/js/importData.js 