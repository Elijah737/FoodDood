DELETE FROM cart
WHERE user_id = $1 AND menu_item_id = $2