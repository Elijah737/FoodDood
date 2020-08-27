INSERT INTO business
(business_name, business_email, cuisine, specialities, specials)
VALUES
($1, $2, $3, $4, $5);

SELECT business_id, business_email FROM business
WHERE business_email = $1