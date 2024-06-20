-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

-- CREATE DATABASE dvdrental
--     WITH
--     OWNER = sarahgarson
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


--EXERCISE 1

--1. Get a list of all the languages, from the language table.

SELECT * FROM language;


-- 2. Get a list of all films joined with their languages – select the following details : film title, description, and language name.

-- SELECT * FROM films

SELECT f.title, f.description, l.name AS language_name
FROM film f
JOIN language l ON f.language_id = l.language_id;

-- 3. Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name:

SELECT f.title, f.description, l.name AS language_name
FROM language l
LEFT JOIN film f ON l.language_id = f.language_id;

-- 4. Create a new table called new_film with the following columns : id, name. Add some new films to the table:

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);


INSERT INTO new_film (name) 
VALUES 
('The Boy Who Harnessed the Wind'), 
('Interstellar');

-- 5. Create a new table called customer_review, which will contain film reviews that customers will make.
--Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
--It should have the following columns:

-- review_id:
-- film_id:
-- language_id:
-- title:
-- score:
-- review_text:
-- last_update:

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id),
    title VARCHAR(255) NOT NULL,
    score INTEGER CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
	--TIMESTAMP: data type used to store a date and time value. 
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--6. Add 2 movie reviews. Make sure you link them to valid objects in the other tables:

INSERT INTO customer_review (film_id, language_id, title, score, review_text) 
VALUES 
(1, 1, 'Amazing Movie', 9, 'Watching it again tonight!'),
(2, 2, 'OMG type of movie!', 9, 'One of the best movies I have ever watched.');

-- SELECT * FROM customer_review;

-- 7. Delete a film that has a review from the new_film table, what happens to the customer_review table?


DELETE FROM new_film WHERE id = 1;


SELECT * FROM customer_review;




-- EXERCISE 2


--1. Use UPDATE to change the language of some films. Make sure that you use valid languages:

--wrote this first but then got an error since portuguese doesnt appear as a language in the language table
-- UPDATE film
-- SET language_id = (
--     SELECT language_id
--     FROM language
--     WHERE name = 'Portuguese'
-- )
-- WHERE film_id IN (1, 2, 3);

UPDATE film
SET language_id = 1
WHERE film_id IN (1, 2, 3);

-- SELECT * FROM film;

-- 2. Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

SELECT * FROM customer;

--the foreign keys are:

-- `store_id`
-- `address_id`

--These foreign keys enforce that any value inserted into the `customer` table for these columns has to already exist in the `store` and `address` tables. 
--This means that when inserting the data into the `customer` table, we have to make sure that the specified `store_id` and `address_id` are valid and present in their respective tables.


-- 3. We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

-- since we have foreign keys we need to drop them first:

DROP TABLE IF EXISTS customer_review CASCADE;


-- 4. Find out how many rentals are still outstanding (i.e., have not been returned to the store yet).

SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;


--5. Find the 30 most expensive movies which are outstanding (i.e., have not been returned to the store yet).

SELECT f.title, f.rental_rate
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

-- 6. Your friend is at the store and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?


--a. The 1st film: The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description ILIKE '%sumo%'
AND a.first_name = 'Penelope'
AND a.last_name = 'Monroe';

-- b. The 2nd film: A short documentary (less than 1 hour long), rated “R”.

SELECT title
FROM film
WHERE length < 60
AND rating = 'R'
AND description ILIKE '%documentary%';


--c. The 3rd film: A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

SELECT f.title
FROM rental r
JOIN payment p ON r.rental_id = p.rental_id
JOIN customer c ON r.customer_id = c.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND p.amount > 4.00
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';



-- d. The 4th film: His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

SELECT f.title
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;





















