-- Ex2 - Create a database for an e-commerce, where the system will work with product information from this e-commerce

create database db_RetailFurniture;

use db_RetailFurniture;

create table tb_Ecommerce(
id bigint auto_increment primary key,
productName varchar(255) not null,
premises varchar(255) not null, 
color varchar(255) not null,
stock int not null, 
price decimal(7,2) not null
);

insert into tb_Ecommerce (productName, premises, color, stock , price) 
values
( "Couch Vila Nova", "Living Room", "Beige", 35, 7000.00),
( "King Bed Premium 1", "Bedroom", "Pure White", 24, 1000.00),
( "Office Desk", "Office", "Black", 95, 300.00),
( "Dishwasher Ross", "Kitchen", "Silver" , 27 , 5000.00),
( "Alarm Clock", "Bedroom", "Green", 220, 30.00),
( "Carpet Weave", "Living Room", "Brown", 64, 190.00),
( "Artificial potted Plant", "Dining Room", "Green", 80, 40.00),
( "Mirror Sun", "Bathroom", "Gold", 110, 89.00);

select * from tb_Ecommerce where price > 500.00;

select * from tb_Ecommerce where price < 500.00;

UPDATE tb_Ecommerce SET price = 200.00 where id = 8;


