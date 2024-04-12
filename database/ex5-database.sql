create database db_pizzeria_italiansca;

use db_pizzeria_italiansca;

create table tb_categories (
    id bigint auto_increment primary key,
    size varchar(60),
    category varchar(60)
);

insert into tb_categories (size, category)
values
("Medium", "Sweet"),
("Large", "Sweet"),
("Small", "Sweet"),
("Small", "Savoury"),
("Medium", "Savoury"),
("Large", "Savoury");

create table tb_pizzas (
    id bigint auto_increment primary key,
    flavor varchar(200) not null,
    price decimal(5,2) not null,
    calories int not null,    
    descriptionPizza varchar(200) not null,
    category_id bigint
    
);

alter table tb_pizzas add constraint fk_pizzas_categories
foreign key (category_id) references tb_categories (id);

insert into tb_pizzas (flavor, price, calories, descriptionPizza, category_id)
values
("Margherita - Small", 45.00, 850, "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil, small size", 1),
("Margherita - Medium", 65.00, 950, "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil, medium size", 1),
("Margherita - Large", 85.00, 1050, "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil, large size", 1),
("Pepperoni - Small", 40.99, 900, "Traditional pizza with spicy pepperoni slices and melted cheese, small size", 2),
("Pepperoni - Medium", 25.99, 1000, "Traditional pizza with spicy pepperoni slices and melted cheese, medium size", 2),
("Pepperoni - Large", 30.99, 1100, "Traditional pizza with spicy pepperoni slices and melted cheese, large size", 2),
("Quattro Stagioni - Small", 50.00, 1000, "Pizza topped with tomato sauce, mozzarella cheese, ham, mushrooms, artichokes, and olives, small size", 3),
("Quattro Stagioni - Medium", 65.00, 1100, "Pizza topped with tomato sauce, mozzarella cheese, ham, mushrooms, artichokes, and olives, medium size", 3),
("Quattro Stagioni - Large", 75.00, 1200, "Pizza topped with tomato sauce, mozzarella cheese, ham, mushrooms, artichokes, and olives, large size", 3),
("Calzone - Small", 99.00, 1050, "Folded pizza filled with tomato sauce, mozzarella cheese, ham, and mushrooms, small size", 2);


select flavor, price, calories, descriptionPizza, tb_categories.size, tb_categories.category
from tb_pizzas inner join tb_categories on tb_pizzas.category_id = tb_categories.id;

select flavor, price, calories, descriptionPizza, tb_categories.size, tb_categories.category
from tb_pizzas inner join tb_categories on tb_pizzas.category_id = tb_categories.id where price > 45.00;

select flavor, price, calories, descriptionPizza, tb_categories.size, tb_categories.category
from tb_pizzas inner join tb_categories on tb_pizzas.category_id = tb_categories.id where price BETWEEN 50 AND 100;
 
select flavor, price, calories, descriptionPizza, tb_categories.size, tb_categories.category
from tb_pizzas inner join tb_categories on tb_pizzas.category_id = tb_categories.id where flavor LIKE "%P%";

select flavor, price, calories, descriptionPizza, tb_categories.size, tb_categories.category
from tb_pizzas inner join tb_categories on tb_pizzas.category_id = tb_categories.id where tb_categories.category = "Sweet";
