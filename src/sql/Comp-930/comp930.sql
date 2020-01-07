-- Develop a data model for a small application that has at least 3 related tables.
-- You can pick your own but if you can’t think of one consider a customer, invoice, invoice detail, and product tables.
-- Build sample data and load the tables with a small amount of data.
-- The equivalent of 10 customers, each having about 10 invoices and with each invoice having at least 3 items.
-- Spend a few hours considering your options and review with Roman or Larry before you spend much effort on it.
-- Based on the training video build the tables and some sophisticated SQL statements to show the data.
-- The data must be properly normalized.

CREATE TABLE customer(
  customer_id serial PRIMARY KEY,
	firstname VARCHAR(50) NOT NULL,
	lastname VARCHAR(50) NOT NULL,
	address VARCHAR(512),
	phone VARCHAR(50) NOT NULL,
	email VARCHAR(355) NOT NULL,
	);

CREATE TABLE invoice(
    invoice_id serial PRIMARY KEY,
    customer_id INTEGER FOREIGN KEY,
  	order_date TIMESTAMP,
  	total DECIMAL(10, 2),
);

CREATE TABLE product(
  product_id serial PRIMARY KEY,
  product_name VARCHAR(50) NOT NULL,
  product_description TEXT(1000),
  unit_price DECIMAL(10, 2),
  total_stock INTEGER,
);

CREATE TABLE item(
  invoice_id INTEGER PRIMARY KEY
  product_id INTEGER FOREIGN KEY,
  product_name VARCHAR(50) NOT NULL,
  unit_price DECIMAL(10, 2),
  total DECIMAL(10, 2),
);
