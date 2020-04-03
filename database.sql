SHOW DATABASES;

CREATE DATABASE join_us_app;

USE join_us_app;

CREATE TABLE users (
	email VARCHAR(255) PRIMARY KEY,
	created_at TIMESTAMP DEFAULT NOW()
); 

DESCRIBE users;

SELECT * FROM users;

INSERT INTO users (email) VALUES ('renatoamreis@gmail.com'), ('hannaromero18@gmail.com');

DELETE FROM users;


-- Find Earliest Date A User Joined


SELECT DATE_FORMAT(MIN(created_at), "%M %D %Y") as earliest_date FROM users;


-- Find email of the first user

-- 1st
SELECT email, created_at FROM users ORDER BY created_at ASC LIMIT 1;

-- 2nd and best answer
SELECT * FROM users WHERE created_at = (SELECT MIN(created_at) FROM users);


-- USERS ACCORDING TO THE MONTH THEY JOINED

SELECT MONTHNAME(created_at) as month, COUNT(*) as count FROM users GROUP BY month ORDER BY count DESC;


-- Count number of users with yahoo emails

SELECT COUNT(*) as yahoo_users FROM users WHERE email LIKE '%@yahoo.com';


-- Calculate Total number of users for each email host

SELECT 
	CASE 
		WHEN email LIKE '%gmail.com' THEN 'gmail'
		WHEN email LIKE '%yahoo.com' THEN 'yahoo'
		WHEN email LIKE '%hotmail.com' THEN 'hotmail'
 		ELSE 'other'
	END AS provider,
	COUNT(*) AS total_users
FROM users
GROUP BY provider; 


SELECT email LIKE 'rere%' FROM users;

SELECT email FROM users WHERE email LIKE 'rere%';


SELECT * FROM users;
