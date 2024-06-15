-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

-- CREATE DATABASE "Hollywood"
--     WITH
--     OWNER = sarahgarson
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- COMMENT ON DATABASE "Hollywood"
--     IS 'DI-Data-Base-Class';

SELECT * FROM actors;
SELECT COUNT(*) actors;

INSERT INTO actors (first_name, last_name, age,number_oscars) VALUES ('John', 'Doe','','');
