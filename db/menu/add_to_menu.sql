INSERT INTO menu
(item_name, item_price, item_description, item_image)
VALUES
($1, $2, $3, $4)

SELECT * FROM menu
WHERE business_id = business.business_id