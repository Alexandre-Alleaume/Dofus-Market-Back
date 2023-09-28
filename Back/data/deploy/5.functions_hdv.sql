BEGIN;

/* CRUD of the hdv Table */

/* CREATE AN ITEM IN THE HDV */

-- Basically this function create dynamically an INSERT query. As I designed the table to have all the possible characteristics of the item of the game. I want to be able to only insert the characteristic drelevant for the item selected.

CREATE OR REPLACE FUNCTION web.insert_hdv(IN json_data jsonb)
    RETURNS text
    LANGUAGE 'plpgsql'
    VOLATILE SECURITY DEFINER
    PARALLEL UNSAFE
    COST 100
    
AS $BODY$
DECLARE
    sql_statement text := 'INSERT INTO web.hdv (';
	sql_statement_second_part text := 'VALUES (';
    key text;
    value jsonb;
BEGIN

    -- Loop through each key-value pair in the JSON object
    FOR key, value IN SELECT * FROM jsonb_each(json_data)
    LOOP
	IF key<>'id'THEN
	IF value::text<>'null' THEN
	sql_statement := sql_statement || key || ', ';
  sql_statement_second_part := sql_statement_second_part ||  value || ', ';
		END IF;
		END IF;
    END LOOP;

    -- Remove the trailing comma and space from the sql_statement
    IF length(sql_statement) > 0 THEN
        sql_statement := left(sql_statement, length(sql_statement) - 2);
		sql_statement := sql_statement || ') ';
    END IF;
	
	IF length(sql_statement_second_part) > 0 THEN
        sql_statement_second_part := left(sql_statement_second_part, length(sql_statement_second_part) - 2);
		sql_statement_second_part := sql_statement_second_part || ') ';
    END IF;
	
	 sql_statement := sql_statement || sql_statement_second_part || 'RETURNING *';

   sql_statement := REPLACE(sql_statement, '"', '''');
	 
	 -- Execute the dynamic SQL statement.
EXECUTE sql_statement;

RETURN sql_statement;

END;
$BODY$;

/* DELETE AN ITEM FROM HDV */
CREATE FUNCTION web.delete_hdv(hdv_id int) RETURNS web.hdv AS $$ -- void signifie qu'on ne retourne rien
DELETE FROM
  web.hdv
WHERE
  web.hdv.id = hdv_id RETURNING *;

$$ LANGUAGE sql SECURITY DEFINER;

/* SELECT ALL ITEMS IN THE HDV */
CREATE FUNCTION web.get_all_hdv() RETURNS SETOF web.hdv_generic AS $$
SELECT
  *
FROM
  web.hdv_generic;

$$ LANGUAGE sql SECURITY DEFINER;

/* SELECT ONE ITEM IN THE HDV */
CREATE FUNCTION web.get_hdv(hdv_id int) RETURNS web.hdv_generic AS $$
SELECT
  *
FROM
  web.hdv_generic
WHERE
  web.hdv_generic.id = hdv_id;

$$ LANGUAGE sql SECURITY DEFINER;

/* SELECT HDV BY GENERIC ITEM */
CREATE FUNCTION web.get_hdv_by_generic(generic_item_id int) RETURNS SETOF web.hdv_generic AS $$
SELECT
  *
FROM
  web.hdv_generic
WHERE
  web.hdv_generic.generic_item_id = $1;

$$ LANGUAGE sql SECURITY DEFINER;


/* SELECT HDV BY USER */
CREATE FUNCTION web.get_user_hdv(user_id int) RETURNS SETOF web.hdv_generic AS $$
SELECT
  *
FROM
  web.hdv_generic
WHERE
  web.hdv_generic.vendeur_id = user_id;

$$ LANGUAGE sql SECURITY DEFINER;

/* UPDATE AN ITEM IN THE HDV  */

-- Basically this function create dynamically an UPDATE query depending of the field(s) the user wants to modified on the object

CREATE OR REPLACE FUNCTION web.update_hdv(IN json_data jsonb)
    RETURNS text
    LANGUAGE 'plpgsql'
    VOLATILE SECURITY DEFINER
    PARALLEL UNSAFE
    COST 100
    
AS $BODY$
DECLARE
id integer; 
    sql_statement text := 'UPDATE web.hdv SET ';
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

/* FILTERS ITEM IN THE HDV  */

CREATE OR REPLACE FUNCTION web.filter_hdv(IN json_data jsonb)
   RETURNS SETOF web.hdv_generic
    LANGUAGE 'plpgsql'
    VOLATILE SECURITY DEFINER
    PARALLEL UNSAFE
    COST 100
    
AS $BODY$
DECLARE
id integer; 
    sql_statement text := 'SELECT * FROM web.hdv_generic WHERE ';
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
	sql_statement := sql_statement || key || '>= ' || value || ' AND ';
  
		END IF;
		END IF;
    END LOOP;

    -- Remove the trailing comma and space from the sql_statement
    IF length(sql_statement) > 0 THEN
        sql_statement := left(sql_statement, length(sql_statement) - 1);
    END IF;
	
	 sql_statement := sql_statement || ' generic_item_id = ' || id;

   sql_statement := REPLACE(sql_statement, '"', '''');
	 
	 -- Execute the dynamic SQL statement.
RETURN QUERY EXECUTE sql_statement;

END;
$BODY$;

COMMIT;