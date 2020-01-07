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

SELECT * FROM customer;
 -- Populate with 10 Customers
 INSERT INTO customer (firstname, lastname, address, phone, email)
 VALUES ('Dane', 'Howard','4781 Magna. Rd.', '1-761-390-4364', 'malesuada.augue@egetipsum.org'),
 ('Kaitlin','Case','5221 Ipsum St.','1-902-514-4047','risus.In@mollisnec.org'),
 ('Clare','Dunlap','8471 Et Street','1-931-325-2208','nec@Inscelerisquescelerisque.co.uk'),
 ('Axel','Cardenas','Ap #253-4033 Volutpat Rd.','1-372-886-2621','vitae.aliquet@et.ca'),
 ('Randall','Robertson','737-3601 Amet St.','1-358-177-3748','molestie@neque.ca'),
 ('Xantha','Brown','2884 Fermentum Road','1-953-305-4569','Phasellus@Nullamsuscipitest.org'),
 ('Dolan','Lloyd','Ap #414-6361 Eu Rd.','1-887-245-0182','orci@turpisIn.edu'),
 ('Hammett','Adkins','2845 Per Avenue','1-193-290-1547','Donec.felis@nonummyac.com'),
 ('Nelle','Reed','5645 Vestibulum. Street','1-995-247-3571','erat.Etiam.vestibulum@dolor.edu'),
 ('Kenyon','Petersen','>9641 Eu St.','1-474-936-8646','turpis.nec.mauris@dolor.ca')
;

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
