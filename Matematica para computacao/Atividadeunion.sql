create table usuario(nome varchar(100), cidade varchar(100));
 
insert into usuario(nome, cidade) values('Felipe', 'Brazópolis');
insert into usuario(nome, cidade) values('Luiz', 'Paraisópolis');
insert into usuario(nome, cidade) values('Luciana', 'Três Corações');
insert into usuario(nome, cidade) values('Alessandro', 'São Bento do Sapucaí');
insert into usuario(nome, cidade) values('Guilherme', 'São Bento do Sapucaí');

select * from usuario;
 
select * from usuario where nome = 'Felipe' union 
		 select * from usuario where nome = 'Alessandro';

select * from usuario where nome = 'Felipe' union 
		 select * from usuario where nome = 'Guilherme';
		 
select * from usuario where nome = 'Luiz' union 
		 select * from usuario where nome = 'Guilherme' union
		 select * from usuario where nome = 'Alessandro'union
		 select * from usuario where nome ='Felipe';
		 
select * from usuario where nome = 'Luciana' union 
		 select * from usuario where nome = 'Guilherme' union
		 select * from usuario where nome = 'Alessandro'
		ORDER BY nome ASC;

		
select *from usuario

order by cidade DESC


		
		 select * from usuario where nome ='Felipe';	
		 
 select * from usuario where nome = 'Guilherme' union
		 select * from usuario where nome = 'Alessandro'union
		 select * from usuario where nome ='Felipe';		 
