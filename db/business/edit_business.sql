UPDATE business
SET
business_name = ${business_name},
cuisine = ${cuisine},
specialities = ${specialities},
specials = ${specials}
WHERE business_id = ${business_id};

SELECT * FROM business
WHERE business_id = ${business_id};