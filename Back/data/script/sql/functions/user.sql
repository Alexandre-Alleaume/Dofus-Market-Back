BEGIN;

/* CRUD of the user Table */

/* CREATE A user */

CREATE FUNCTION administration.insert_user(user json) RETURNS administration.user AS $$
INSERT INTO
  administration.user (
    pseudo,
    email,
    "password",
    profile_picture_id
  )
VALUES
  (
    (user ->> 'pseudo'),
    (user ->> 'email'),
    (user ->> 'password'),
    (user ->> 'profile_picture_id'),
    
  ) RETURNING *;

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


/* UPDATE A user */

-- Not necessary as a client can only add a user to his list or delete a user from his list. Basically, he has nothing to update
CREATE
OR REPLACE FUNCTION web.update_user(f json) RETURNS web.user AS $$ DECLARE user_db web.user;

BEGIN -- je récupère la catégorie en BDD par son id
SELECT
  * INTO user_db
FROM
  web.user
WHERE
  id =(f ->> 'id') :: int;

-- checking if I should modify hdv_id field
IF f ->> 'hdv_id' is not null THEN user_db.hdv_id = (f ->> 'hdv_id')::int;

END IF;
-- checking if I should modify user_id field
IF f ->> 'user_id' is not null THEN user_db.user_id = (f ->> 'user_id')::int;

END IF;


UPDATE
  web.user
SET
  hdv_id = user_db.hdv_id,
  user_id = user_db.user_id,
WHERE
  id =(f ->> 'id') :: int;

-- plpgsql nous oblige à utiliser le mot RETURN pour retourner la valeur
RETURN user_db;

END;

$$ LANGUAGE plpgsql SECURITY DEFINER;

;

COMMIT;