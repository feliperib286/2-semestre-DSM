--criando a tabelas--
drop table if exists focos_calor;
CREATE TABLE focos_calor (
  idfocos_calor INTEGER NOT NULL,
  estado VARCHAR(45) NULL,
  bioma  VARCHAR(45) NULL,
  data_ocorrencia DATE NULL,
  PRIMARY KEY(idfocos_calor)
);

select *from  focos_calor;
--inserindo os dados--
insert into focos_calor(idfocos_calor,estado,bioma,data_ocorrencia) values
(1,'Amazonas','Amazônia','2025-02-01'),
(2,'MatoGrosso','Cerrado','2025-02-03'),
(3,'Pará','Amazônia','2025-02-05');

 --4 consulta dos dados inseridos--
select *from  focos_calor;
