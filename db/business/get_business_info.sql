SELECT * FROM business
WHERE business_id = $1;

SELECT * FROM menu
WHERE business_id = $1;