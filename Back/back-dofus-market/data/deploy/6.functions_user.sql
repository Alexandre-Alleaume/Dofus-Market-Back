BEGIN;

/* CRUD of the user Table */

/* CREATE A user */

CREATE FUNCTION administration.insert_user (player json) RETURNS administration.user AS $$
INSERT INTO
  administration.user (
    pseudo,
    email,
    "password",
    profile_picture_id
  )
VALUES
  (
    player ->> 'pseudo',
    player ->> 'email',
    player ->> 'password',
    player ->> 'profile_picture_id'
  ) 
  
  RETURNING *;

$$ LANGUAGE sql SECURITY DEFINER;

/* DELETE A user */

/* Possibility to delete a user and all its data  */
CREATE FUNCTION administration.delete_user(user_id int) RETURNS administration.user AS $$ 
DELETE FROM
  administration.user
WHERE
  id = user_id RETURNING *;

$$ LANGUAGE sql SECURITY DEFINER;

/* SELECT ALL user */
CREATE FUNCTION administration.get_all_user() RETURNS SETOF administration.user AS $$
SELECT
  *
FROM
  administration.user;

$$ LANGUAGE sql SECURITY DEFINER;

/* SELECT ONE user */
CREATE FUNCTION administration.get_user(user_id int) RETURNS administration.user AS $$
SELECT
  *
FROM
  administration.user
WHERE
  id = user_id;

$$ LANGUAGE sql SECURITY DEFINER;

/* SELECT ONE user by its name */
CREATE FUNCTION administration.get_user_by_pseudo(pseudo text) RETURNS administration.user AS $$
SELECT
  *
FROM
  administration.user
WHERE
  administration.user.pseudo = get_user_by_pseudo.pseudo;

$$ LANGUAGE sql SECURITY DEFINER;


/* UPDATE A user */

CREATE OR REPLACE FUNCTION administration.update_user(IN json_data jsonb)
    RETURNS text
    LANGUAGE 'plpgsql'
    VOLATILE SECURITY DEFINER
    PARALLEL UNSAFE
    COST 100
    
AS $BODY$
DECLARE
id integer; 
    sql_statement text := 'UPDATE administration.user SET ';
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



-- fonction qui vérifie les données passées pour se connecter
CREATE FUNCTION administration.check_user(u json) RETURNS administration.user AS $$
	SELECT *
	FROM administration.user
	WHERE pseudo=u->>'pseudo' /* AND "password"=u->>'password' */;

$$ LANGUAGE sql SECURITY DEFINER;

COMMIT;