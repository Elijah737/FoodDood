INSERT INTO menu
(item_name, item_price, item_description, item_image, business_id)
VALUES
(${item_name}, ${item_price}, ${item_description}, ${item_image}, ${business_id});

SELECT * FROM menu
WHERE business_id = ${business_id};