INSERT INTO business
(business_name, business_email, business_password, cuisine, specialities, specials)
VALUES
($1, $2, $3, $4, $5, $6);

SELECT business_id, business_email FROM business
WHERE business_email = $2;