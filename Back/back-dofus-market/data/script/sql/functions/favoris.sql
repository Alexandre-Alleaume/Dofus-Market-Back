BEGIN;

/* CRUD of the favoris Table */

/* CREATE A FAVORIS */

CREATE FUNCTION web.insert_favoris(favoris json) RETURNS web.favoris AS $$
INSERT INTO
  web.favoris (
    hdv_id,
    user_id,
  )
VALUES
  (
    (favoris ->> 'hdv_id') :: int,
    (favoris ->> 'user_id') :: int,
  ) RETURNING *;

$$ LANGUAGE sql SECURITY DEFINER;

/* DELETE A FAVORIS */
CREATE FUNCTION web.delete_favoris(favoris_id int) RETURNS web.favoris AS $$ -- void signifie qu'on ne retourne rien
DELETE FROM
  web.favoris
WHERE
  id = favoris_id RETURNING *;

$$ LANGUAGE sql SECURITY DEFINER;

/* SELECT ALL FAVORIS */
CREATE FUNCTION web.get_all_favoris() RETURNS SETOF web.favoris AS $$
SELECT
  *
FROM
  web.favoris;

$$ LANGUAGE sql SECURITY DEFINER;

/* SELECT ONE FAVORIS */
CREATE FUNCTION web.get_favoris(favoris_id int) RETURNS web.favoris AS $$
SELECT
  *
FROM
  web.favoris
WHERE
  id = favoris_id;

$$ LANGUAGE sql SECURITY DEFINER;


/* SELECT FAVORIS BY USER */
CREATE FUNCTION web.get_user_favoris(user_id int) RETURNS web.favoris AS $$
SELECT
  *
FROM
  web.favoris
WHERE
  web.favoris.user_id = user_id;

$$ LANGUAGE sql SECURITY DEFINER;

/* UPDATE A FAVORIS */

-- Not necessary as a client can only add a favoris to his list or delete a favoris from his list. Basically, he has nothing to update
CREATE
OR REPLACE FUNCTION web.update_favoris(f json) RETURNS web.favoris AS $$ DECLARE favoris_db web.favoris;

BEGIN -- je récupère la catégorie en BDD par son id
SELECT
  * INTO favoris_db
FROM
  web.favoris
WHERE
  id =(f ->> 'id') :: int;

-- checking if I should modify hdv_id field
IF f ->> 'hdv_id' is not null THEN favoris_db.hdv_id = (f ->> 'hdv_id')::int;

END IF;
-- checking if I should modify user_id field
IF f ->> 'user_id' is not null THEN favoris_db.user_id = (f ->> 'user_id')::int;

END IF;


UPDATE
  web.favoris
SET
  hdv_id = favoris_db.hdv_id,
  user_id = favoris_db.user_id,
WHERE
  id =(f ->> 'id') :: int;

-- plpgsql nous oblige à utiliser le mot RETURN pour retourner la valeur
RETURN favoris_db;

END;

$$ LANGUAGE plpgsql SECURITY DEFINER;

;

COMMIT;