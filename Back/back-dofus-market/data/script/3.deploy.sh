export PGUSER=admin_dofusmarket
export PGPASSWORD=bouftou

# je souhaite déployer jusqu'à la version 3
# sqitch deploy 3.serial_number_unique

sqitch deploy 1.create_tables


# je souhaite déployer jusqu'à la dernière version
sqitch deploy