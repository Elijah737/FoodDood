-- SELECT c.cart_item_id, c.user_id, c.menu_item_id, m.item_name, m.item_price, m.description FROM cart c
-- JOIN menu m
-- ON c.menu_item_id = m.menu_item_id
-- WHERE c.user_id = $1;

SELECT m.menu_item_id, m.item_name, m.item_price, m.item_description, m.item_image, m.business_id FROM menu m
JOIN business b ON m.business_id = b.business_id
WHERE b.business_id = $1;

-- SELECT * FROM menu WHERE business_id = $1;