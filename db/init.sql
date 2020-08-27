CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	email VARCHAR(200),
	password VARCHAR(255),
	name VARCHAR(200),
	address VARCHAR(255)
);

CREATE TABLE cart (
	cart_item_id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(user_id),
	menu_item_id INT REFERENCES menu(menu_item_id)
);

CREATE TABLE menu (
	menu_item_id SERIAL PRIMARY KEY,
	item_name VARCHAR(200),
	item_price INT,
	item_description VARCHAR(500),
	item_image VARCHAR(300),
	business_id INT REFERENCES business(business_id)
);

CREATE TABLE business (
	business_id SERIAL PRIMARY KEY,
	business_name VARCHAR(200),
	business_email VARCHAR(200),
	cuisine VARCHAR(200),
	specialities VARCHAR(255),
	specials VARCHAR(500)
);
