-- Database: daily-challenge

-- DROP DATABASE IF EXISTS "daily-challenge";

-- CREATE DATABASE "daily-challenge"
--     WITH
--     OWNER = sarahgarson
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


--PART I



--1. Create 2 tables : Customer and Customer profile. They have a One to One relationship.

--A customer can have only one profile, and a profile belongs to only one customer
--The Customer table should have the columns : id, first_name, last_name NOT NULL
--The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)

CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE customer_profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INTEGER REFERENCES Customer(id)
);

-- 2. Insert those customers

-- John, Doe
-- Jerome, Lalu
-- Lea, Rive

INSERT INTO customer (first_name, last_name) 
VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

--3. Insert those customer profiles, use subqueries

-- John is loggedIn
-- Jerome is not logged in


--was getting an error saying 'more than one row returned by a subquery used as an expression'
-- INSERT INTO customer_profile (isLoggedIn, customer_id)
-- VALUES (true, (SELECT id FROM Customer WHERE first_name = 'John'));

-- INSERT INTO customer_profile (isLoggedIn, customer_id)
-- VALUES (false, (SELECT id FROM Customer WHERE first_name = 'Jerome'));

-- this one works because of the LIMIT1
INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES (true, (SELECT id FROM Customer WHERE first_name = 'John' LIMIT 1));

INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES (false, (SELECT id FROM Customer WHERE first_name = 'Jerome' LIMIT 1));

-- 4. Use the relevant types of Joins to display:

-- The first_name of the LoggedIn customers
-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
-- The number of customers that are not LoggedIn


-- The first_name of the LoggedIn customers
SELECT c.first_name
FROM customer c
JOIN customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile
SELECT c.first_name, cp.isLoggedIn
FROM customer c
LEFT JOIN Customer_profile cp ON c.id = cp.customer_id;

-- The number of customers that are not LoggedIn
SELECT COUNT(*)
FROM customer c
LEFT JOIN customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = false OR cp.isLoggedIn IS NULL;



--PART II


-- 1. Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL

CREATE TABLE book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

-- 2. Insert those books :

-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee


INSERT INTO book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');


-- 3. Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);

CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    age INTEGER CHECK (age <= 15)
);



-- 4.  Insert those students:

-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14

INSERT INTO Student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- 5. Create a table named Library, with the columns :

-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table

CREATE TABLE Library (
    book_fk_id INTEGER REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_fk_id INTEGER REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id)
);


-- 6. Add 4 records in the junction table, use subqueries.

-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021


--check this one in class:

-- Inserting records for 'Alice In Wonderland' borrowed by 'John' on '2022-02-15'
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
SELECT b.book_id, s.student_id, '2022-02-15'
FROM Book b
JOIN Student s ON b.title = 'Alice In Wonderland' AND s.name = 'John';

-- Inserting records for 'To kill a mockingbird' borrowed by 'Bob' on '2021-03-03'
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
SELECT b.book_id, s.student_id, '2021-03-03'
FROM Book b
JOIN Student s ON b.title = 'To kill a mockingbird' AND s.name = 'Bob';

-- Inserting records for 'Alice In Wonderland' borrowed by 'Lera' on '2021-05-23'
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
SELECT b.book_id, s.student_id, '2021-05-23'
FROM Book b
JOIN Student s ON b.title = 'Alice In Wonderland' AND s.name = 'Lera';

-- Inserting records for 'Harry Potter' borrowed by 'Bob' on '2021-08-12'
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
SELECT b.book_id, s.student_id, '2021-08-12'
FROM Book b
JOIN Student s ON b.title = 'Harry Potter' AND s.name = 'Bob';

	

	
	
	-- 7. Display the data
	
-- Select all the columns from the junction table
-- Select the name of the student and the title of the borrowed books
-- Select the average age of the children, that borrowed the book Alice in Wonderland
-- Delete a student from the Student table, what happened in the junction table ?

-- Select all the columns from the junction table
SELECT * FROM Library;

-- Select the name of the student and the title of the borrowed books
SELECT s.name, b.title
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG(s.age) as average_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- Delete a student from the Student table
DELETE FROM Student WHERE name = 'John';

-- Verify what happened in the junction table
SELECT * FROM Library;


		
		










