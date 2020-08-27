-- SELECT c.cart_item_id, c.user_id, c.menu_item_id, m.item_name, m.item_price, m.description FROM cart c
-- JOIN menu m
-- ON c.menu_item_id = m.menu_item_id
-- WHERE c.user_id = $1;


SELECT m.menu_item_id, m.business_id, m.item_name, m.item_price, m.item_description, m.item_image FROM menu m
JOIN business b
ON m.business_id = b.business_id
WHERE m.business_id = $1;