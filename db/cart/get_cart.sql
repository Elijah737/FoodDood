SELECT c.cart_item_id, c.user_id, c.menu_item_id, m.item_name, m.item_price, m.description FROM cart c
JOIN menu m
ON c.menu_item_id = m.menu_item_id
WHERE c.user_id = $1;