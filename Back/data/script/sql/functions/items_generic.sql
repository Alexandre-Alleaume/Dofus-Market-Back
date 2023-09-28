BEGIN;

/* CRUD of the item_generic Table */

/* CREATE A GENERIC ITEM */

/* The create feature is not necessary because the game is not oftenupdated and only a dozens of items have been added in the las few years, so it's totally manageable to do it manually in the database. Nevertheless, for the sake of consistency, we create this function in case */

CREATE FUNCTION web.insert_item_generic(item_generic json) RETURNS web.item_generic AS $$
INSERT INTO
  web.item_generic (
    hdv_id,
    user_id,
  )
VALUES
  (
    (item_generic ->> 'hdv_id') :: int,
    (item_generic ->> 'user_id') :: int,
  ) RETURNING *;

$$ LANGUAGE sql SECURITY DEFINER;

/* DELETE A item_generic */
CREATE FUNCTION web.delete_item_generic(item_generic_id int) RETURNS web.item_generic AS $$ -- void signifie qu'on ne retourne rien
DELETE FROM
  web.item_generic
WHERE
  id = item_generic_id RETURNING *;

$$ LANGUAGE sql SECURITY DEFINER;

/* SELECT ALL item_generic */
CREATE FUNCTION web.get_all_item_generic() RETURNS SETOF web.item_generic AS $$
SELECT
  *
FROM
  web.item_generic;

$$ LANGUAGE sql SECURITY DEFINER;

/* SELECT ONE item_generic */
CREATE FUNCTION web.get_item_generic(item_generic_id int) RETURNS web.item_generic AS $$
SELECT
  *
FROM
  web.item_generic
WHERE
  id = item_generic_id;

$$ LANGUAGE sql SECURITY DEFINER;




/* UPDATE A item_generic */

-- Not necessary, the best way is to do it manually in pgAdmin as only minor and rare amendments could be needed

/* UPDATE AN ITEM IN THE HDV  */

-- Basically this function create dynamically an UPDATE query depending of the field(s) the user wants to modified on the object

CREATE OR REPLACE FUNCTION web.update_item_generic(IN json_data jsonb)
    RETURNS text
    LANGUAGE 'plpgsql'
    VOLATILE SECURITY DEFINER
    PARALLEL UNSAFE
    COST 100
    
AS $BODY$
DECLARE
id integer; 
    sql_statement text := 'UPDATE web.items_generic SET ';
    key text;
    value jsonb;
BEGIN

 -- Extract the ticket ID from the JSON object.
 id := (json_data ->> 'id') :: integer;

    -- Loop through each key-value pair in the JSON object
    FOR key, value IN SELECT * FROM jsonb_each(json_data)
    LOOP
	IF key<>'id'THEN
	IF value::text<>'null' THEN
	sql_statement := sql_statement || key || '= ' || value || ', ';
  
		END IF;
		END IF;
    END LOOP;

    -- Remove the trailing comma and space from the sql_statement
    IF length(sql_statement) > 0 THEN
        sql_statement := left(sql_statement, length(sql_statement) - 2);
    END IF;
	
	 sql_statement := sql_statement || ' WHERE id = ' || id;

   sql_statement := REPLACE(sql_statement, '"', '''');
	 
	 -- Execute the dynamic SQL statement.
EXECUTE sql_statement;

    RETURN sql_statement;
END;
$BODY$;




COMMIT;