-- Ex1 - Creating a database for a company's HR service, where the system will work with information from this company's employees.

create database db_HumanResources;
use db_HumanResources;

create table tb_employees(
id bigint auto_increment primary key,
firstname varchar(255) not null,
lastname varchar(255) not null, 
position varchar(255) not null,
department varchar(255) not null, 
salary decimal(7,2) not null
);

insert into tb_employees (firstname, lastname, position, department , salary) 
values
( "Paul", "Mayer", "Data Scientist", "Security", 9500.00),
( "Karen", "Rodgers", "Mobile Developer Jr.", "Integrated Technology Services", 3500.00),
( "Miguel", "Stainler", "Software Engineer Senior", "Business Technology Unit", 22000.00),
( "Liz", "Figueiredo", "Software Engineer Intern", "Digital Business group", 1900.00),
( "Henry", "Stuart", "Solution Architect", "Global Technology Solutions", 34000.00),
( "Sam", "Williams", "Software Engineer", "Business Technology Unit", 9000.00);

select * from tb_employees where salary > 2000.00;

select * from tb_employees where salary < 2000.00;

UPDATE tb_employees SET salary = 10000.00 where id = 6;
