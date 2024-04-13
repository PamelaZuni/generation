create database db_generation_game;
use db_generation_game;

create table tb_class(
id BIGINT AUTO_INCREMENT,
	hybrid varchar(60) not null,
	mystical varchar(60) not null,
    PRIMARY KEY (id)
);

select * from tb_class;

insert into tb_class(hybrid, mystical) 
values ("cleric", "oracle"),
       ("warrior" , "rogue"),
       ("warlock", "illusionist"),
	   ("fighter", "necromancer");


create table tb_characters(
    id BIGINT AUTO_INCREMENT,
	characterName VARCHAR(90) NOT NULL,
	atack int,
    weekness varchar(60) not null,
	defense int,
    PRIMARY KEY (id)
);

ALTER TABLE tb_characters ADD classeId BIGINT;
ALTER TABLE tb_characters ADD CONSTRAINT fk_characters_class
FOREIGN KEY (classeId) REFERENCES tb_class(id);


insert into tb_characters(characterName, atack, weekness, defense, classeId)
values ("Orym", 5000, "lizard skin", 1800, 1),
	   ("Haryk", 2000, "snake venom", 500, 2),
       ("Dolgil", 3500, "metal", 2000, 3),
       ("Cornaith", 9000, "sunlight", 6000, 4),
	   ("Aria", 10000, "moonlight", 7000, 5),
	   ("Thorn", 11000, "silver", 5000, 3),
       ("Zephyr", 2200, "heights", 900, 2),
       ("Lilith", 1900, "holy magic", 600, 1);
       
       select * from tb_class;



       
	select * from tb_characters;
    
    

select * from tb_characters where atack > 2000;

select * from tb_characters where defense between 1000 and 2000;

select * from tb_characters where characterName like "%c%";

select characterName, atack, weekness, defense, tb_class.hybrid, tb_class.mystical
from tb_characters inner join tb_class on tb_characters.classeid = tb_class.id;

select characterName, atack, weekness, defense, tb_class.hybrid, tb_class.mystical
from tb_class inner join tb_characters on tb_characters.classeid = tb_class.Id
where hybrid = "warrior";

