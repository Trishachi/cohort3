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

