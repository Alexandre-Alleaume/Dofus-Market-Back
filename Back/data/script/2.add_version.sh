# Gestion des versions

## version 1
sqitch add 1.create_tables -n "Table creation"

## version 2
sqitch add 2.import_data -n "Importing data to web.items_generic"

## version 3
sqitch add 3.create_view_hdv_generic -n "Creating view for hdv_generic"

## version 4
sqitch add 4.functions_items_generic -n "Creating functions for web.items_generic"

## version 5
sqitch add 5.functions_hdv -n "Creating functions for web.hdv"

## version 6
sqitch add 6.functions_user -n "Creating functions for administration.user"

## version 7
sqitch add 7.functions_favoris -n "Creating functions for web.favoris"

# ## version 3
# sqitch add 4.volume -n "mise en place de height,width,depth plutôt que volume"

# ## version 4
# sqitch add 5.tracking -n "mise en place d'un système de suivi"

# ## version 5
# sqitch add 6.expedition -n "gestion des expeditions"

# ## version 6
# sqitch add 7.constraint -n "ajout des contraintes"