UPDATE menu
SET
item_name = ${item_name},
item_price = ${item_price},
item_image = ${item_image},
item_description = ${item_description}
WHERE menu_item_id = ${menu_item_id};

SELECT * FROM menu
WHERE menu_item_id = ${menu_item_id};