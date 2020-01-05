/*GROUP BY Challenges */
SELECT staff_id, COUNT(amount), SUM(amount)
FROM payment
GROUP BY staff_id;

SELECT customer_id, SUM(amount)
FROM payment
GROUP BY customer_id
ORDER BY sum(amount) DESC
LIMIT 5;

/*HAVING Challenges */
SELECT customer_id, COUNT(amount)
FROM payment
GROUP BY customer_id
HAVING COUNT(amount) >= 40;

SELECT rating, ROUND(AVG(rental_duration), 2)
FROM film
GROUP BY rating
HAVING AVG(rental_duration) > 5;

----------------- CREATE TABLE --------------------------------

CREATE TABLE account_role(
user_id interger NOT NULL
role_id interger NOT NULL
grant_date Timestamp without time zone,
PRIMARY KEY (user_id, role_id),

CONSTRAINT account_role_role_id_fkey FOREIGN KEY (role_id)
	REFERENCES role(role_id) MATCH SIMPLE
	ON UPDATE NO ACTION ON DELETE NO ACTION,

CONSTRAINT account_role_user_id_fkey FOREIGN KEY (user_id)
	REFERENCES account (user_id) MATCH SIMPLE
	ON UPDATE NO ACTION ON DELETE NO ACTION
);

----------------- CREATE TABLE Challenge--------------------------------
CREATE TABLE leads(
  lead_id serial PRIMARY KEY,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  email VARCHAR(355) UNIQUE NOT NULL,
  Sigup_date TIMESTAMP NOT NULL,
  minutes_spent INTEGER NOT NULL
);

----------------- INSERT--------------------------------
