INSERT INTO menu
(item_name, item_price, item_description, item_image, business_id)
VALUES
($1, $2, $3, $4, $5);

SELECT * FROM menu
WHERE business_id = $5;