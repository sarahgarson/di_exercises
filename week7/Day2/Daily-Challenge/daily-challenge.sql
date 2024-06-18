-- Database: daily-challenge-day2

-- DROP DATABASE IF EXISTS "daily-challenge-day2";

-- CREATE DATABASE "daily-challenge-day2"
--     WITH
--     OWNER = sarahgarson
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

DROP TABLE IF EXISTS Firsttab;
DROP TABLE IF EXISTS SecondTab;
-- it was showing an error that I already had the tables created, so I used this and it worked



CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
);

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar');

--SELECT * FROM FirstTab
--after I commented this the error for the next create table disappeared 

CREATE TABLE SecondTab (
    id integer
);

INSERT INTO SecondTab VALUES
(5),
(NULL);

--SELECT * FROM SecondTab


--Q1. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft 
	WHERE ft.id NOT IN 
	( SELECT id FROM SecondTab WHERE id IS NULL );
	
	-- my answer: ids 6 and 7 will be the output
	-- right answer: 0
	
	
	-- Q2. What will be the OUTPUT of the following statement?
	
	    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );
	
	-- my answer: 2
	-- right answer: 2
	
	--Q3. What will be the OUTPUT of the following statement?
	
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab );
	
	--my answer: 0
	-- right answer: 0
	
	
	
	--Q4. What will be the OUTPUT of the following statement?
	

		    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );
	
	--my answer: 0
	-- right answer:2
	
	
	
	

	
	
	
	

	
	
	
	





