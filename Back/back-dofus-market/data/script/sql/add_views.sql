-- Création d'une vue si nécessaire pas utile pour le moment.
/* 
 BEGIN;
 
 -- Vue qui permet de classer les posts par catégories
 CREATE VIEW web.post_by_category AS
 SELECT p.id,p.title,p.content,p.excerpt,p.slug,p.category_id, c.label as "category"
 FROM web.post p -- je donne un alias à ma table
 JOIN web.category as c ON c.id = p.category_id;
 
 COMMIT; */