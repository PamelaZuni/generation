-- Ex3 - Create a database for a school record, where the system will work with student information from that school record.

create database db_SchoolDanzi;

use db_SchoolDanzi;

create table tb_StudentsDetails(
id bigint auto_increment primary key,
StudentName varchar(255) not null,
age int not null, 
gender varchar(255) not null,
class int not null, 
grade decimal(7,2) not null
);

insert into tb_StudentsDetails (StudentName, age, gender, class , grade) 
values
( "Karen Osklen", "13", "Female", 01, 8.6),
( "John Doe", "16", "Male", 03, 7.2),
( "Michael Johnson", 15, "Male", 05, 6.7),
( "Ross Rudgers", 16, "Male" , 04, 7.7),
( "Miley Cintra", 12, "Female", 05, 5.0),
( "Billie Jane", 16, "Female", 04, 8.8),
( "Liza Strudel", 14, "Female", 02, 6.0),
( "Will Sam", 16, "Male", 03, 6.9);

select * from tb_StudentsDetails where grade > 7.0;

select * from tb_StudentsDetails where grade < 7.0;

UPDATE tb_StudentsDetails SET grade = 9.0 where id = 1;

