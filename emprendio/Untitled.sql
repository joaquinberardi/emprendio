-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: Emprendio
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int(200) NOT NULL,
  `categoria (FK)` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Indumentaria'),(2,'Hogar'),(3,'Juguetes'),(4,'Cuidado Personal'),(5,'Bebes'),(6,'Deportes'),(7,'Bazar y cocina');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facturas`
--

DROP TABLE IF EXISTS `facturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facturas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `cantidad` bigint(20) NOT NULL,
  `precio` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id_idx` (`usuario_id`),
  KEY `producto_id_idx` (`producto_id`),
  KEY `precio_idx` (`precio`),
  CONSTRAINT `producto_id` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facturas`
--

LOCK TABLES `facturas` WRITE;
/*!40000 ALTER TABLE `facturas` DISABLE KEYS */;
/*!40000 ALTER TABLE `facturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preguntas`
--

DROP TABLE IF EXISTS `preguntas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preguntas` (
  `id` int(110) NOT NULL AUTO_INCREMENT,
  `pregunta` text NOT NULL,
  `producto_id` int(110) NOT NULL,
  `usuario_id` int(110) NOT NULL,
  `respuesta` text,
  PRIMARY KEY (`id`),
  KEY `producto_idx` (`producto_id`),
  KEY `usuario_idx` (`usuario_id`),
  CONSTRAINT `producto` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preguntas`
--

LOCK TABLES `preguntas` WRITE;
/*!40000 ALTER TABLE `preguntas` DISABLE KEYS */;
INSERT INTO `preguntas` VALUES (1,'¿Se puede personalizar?',1,3,'No'),(2,'¿Se puede cambiar?',1,4,'Si'),(3,'¿Hacen envíos al exterior?',1,3,'No'),(4,'¿Aceptan tarjeta de crédito?',1,5,'Si'),(5,'¿Tienen en color rojo?',2,4,'Si'),(6,'¿Puedo retirarlo por algun lugar?',2,3,'No'),(7,'¿Se puede cambiar?',2,4,'Si'),(8,'¿Se puede personalizar?',2,5,'SI'),(9,'¿Hacen envíos a San Luis?',3,1,'Si'),(10,'¿Puede ser para regalo?',3,8,'Si'),(11,'¿Se puede cambiar?',3,2,'No'),(12,'¿Se puede personalizar?',3,4,'No'),(13,'¿Cuánto tarda el envío hasta Palermo?',4,2,'5 dias'),(14,'¿Cuáles son los métodos de pago?',4,1,'MercadoPago'),(15,'¿Se puede personalizar?',4,5,'Si'),(16,'¿Se puede cambiar?',4,4,'No'),(17,'¿Cuáles son los métodos de pago?',5,1,'MercadoPago'),(18,'¿Puede ser para regalo?',5,1,'Si'),(19,'¿Se puede personalizar?',5,2,'No'),(20,'¿Aceptan tarjeta de crédito?',5,3,'Solo MercadoPago'),(21,'¿Cuánto tarda el envío hasta San Isidro?',6,1,'10 días'),(22,'¿Se puede personalizar?',6,1,'Si'),(23,'¿Hacen envíos a Córdoba?',6,3,'Si, tarda 20 días'),(24,'¿Tienen en color rojo?',6,4,'Si, se puede personalizar'),(25,'¿Cuáles son los métodos de pago?',7,5,'MercadoPago'),(26,'¿Se puede personalizar?',7,2,'No'),(27,'¿Se puede cambiar?',7,3,'Si'),(28,'¿Puedo retirarlo por algun lugar?',7,4,'Si, estamos en Zona Sur'),(29,'¿Cuánto tarda el envío hasta Pilar?',8,5,'5 días'),(30,'¿Se puede personalizar?',8,2,'Si'),(31,'¿Se puede cambiar?',8,3,'Si'),(32,'¿Aceptan tarjeta de crédito?',8,1,'MercadoPago'),(33,'¿Cuánto tarda el envío hasta Palermo?',9,2,'5 días'),(34,'¿Se puede personalizar?',9,3,'No, es de Boca.'),(35,'¿Se puede cambiar?',9,4,'Si'),(36,'¿Puede ser para regalo?',9,5,'Si'),(37,'¿Puedo retirarlo por algun lugar?',10,2,'Si, estamos en Zona Oeste'),(38,'¿Se puede personalizar?',10,3,'No'),(39,'¿Hacen envíos a Córdoba?',10,4,'Si, tardan 10 días'),(40,'¿Tienen en color rojo?',10,2,'No');
/*!40000 ALTER TABLE `preguntas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(500) NOT NULL,
  `precio` bigint(20) NOT NULL,
  `categoria_id` int(200) NOT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `descripcion` text,
  `usuario_id` int(11) NOT NULL,
  `stock` bigint(200) DEFAULT NULL,
  `opciones_envio` text,
  `opciones_pago` text,
  `ubicacion` text,
  `colores` text,
  `personalizacion` text,
  PRIMARY KEY (`id`),
  KEY `categorias_idx` (`categoria_id`),
  KEY `usuario_idx` (`usuario_id`),
  KEY `precio_idx` (`precio`),
  CONSTRAINT `categoria` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `productousuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Remera',200,1,'https://dafitistaticar-a.akamaihd.net/p/midway-6671-066141-1-product.jpg','Remera de algodón con estampado',6,199,'OCA','MercadoPago','CABA','Rojo, amarillo, azul','No'),(2,'Mate',300,7,'https://d26lpennugtm8s.cloudfront.net/stores/872/997/products/20200323_1213001-8b037bf55065bdc3f015849906178485-1024-1024.jpg','Ideal para pasar un rato con amigos. Mate con bombilla',6,100,'OCA','MercadoPago','CABA',NULL,'Si'),(3,'Chupete',600,5,'https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/8/7/8710103872979_02_nuevopack.jpg','Chupete',6,123,'OCA','MercadoPago','CAB',NULL,'No'),(4,'Vela',100,2,'https://i.pinimg.com/originals/32/ee/21/32ee210a9265836665e3bea5404b25f1.jpg','Vela aromatizada',7,50,'Uber','MercadoPago','Pilar','Naranja, violeta, crema','Si'),(5,'Pollera',388,2,'https://http2.mlstatic.com/pollera-roturas-mini-roturas-blanca-en-microcentro-D_NQ_NP_720747-MLA29462002184_022019-F.jpg','Pollera blanca o negra',7,123,'Uber','MercadoPago','Pilar','Blanco, negro','No'),(6,'Taza',500,7,'https://http2.mlstatic.com/taza-artesanal-con-cajita-de-te-de-regalo-D_NQ_NP_860419-MLA42271739467_062020-F.webp','Taza personalizada. La pintamos como te guste',8,34,'Correo Argentino','MercadoPago','Zona Sur',NULL,'Si'),(7,'Anteojos',324,1,'https://d26lpennugtm8s.cloudfront.net/stores/555/016/products/prod11-428084520794391ac115131284531867-640-0.jpg','Anteojos hechos a mano',8,155,'Correo Argentino','MercadoPago','Zona Sur',NULL,'No'),(8,'Yoyo',400,3,'https://i.pinimg.com/originals/55/a8/b6/55a8b609236457120ad6a4901829bcd6.jpg','De madera',9,56,'OCA','MercadoPago','Victoria','Madera','Si'),(9,'Pelota',399,6,'https://falabella.scene7.com/is/image/FalabellaAR/3085242_1?wid=800&hei=800&qlt=70','Pelota de Boca.',10,87,'Moto particular','MercadoPago','Zona Oeste',NULL,'No'),(10,'Cepillo dientes',250,4,'https://d26lpennugtm8s.cloudfront.net/stores/942/490/products/diseno-sin-titulo-291-29b46c66973544467b15815175299179-640-0.png','Cepillo de dientes sustentable. Cuidá al medioambiente!',10,65,'Moto particular','MercadoPago','Zona Oeste','Madera','No');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoUsuario_id`
--

DROP TABLE IF EXISTS `tipoUsuario_id`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipoUsuario_id` (
  `id` int(200) NOT NULL,
  `tipoUsuario(FK)` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoUsuario_id`
--

LOCK TABLES `tipoUsuario_id` WRITE;
/*!40000 ALTER TABLE `tipoUsuario_id` DISABLE KEYS */;
INSERT INTO `tipoUsuario_id` VALUES (1,'Comprador'),(2,'Vendedor'),(3,'Administrador');
/*!40000 ALTER TABLE `tipoUsuario_id` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  `Apellido` varchar(50) NOT NULL,
  `DNI` int(11) DEFAULT NULL,
  `Mail` varchar(100) NOT NULL,
  `NombreUsuario` varchar(45) NOT NULL,
  `Contraseña` varchar(300) NOT NULL,
  `RedSocial` varchar(500) DEFAULT NULL,
  `Foto` varchar(9999) DEFAULT NULL,
  `TiempoCreación` varchar(500) DEFAULT NULL,
  `Historia` text,
  `Integrantes` text,
  `Empleados` varchar(2) DEFAULT NULL,
  `TipoUsuario_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `NombreUsuario_UNIQUE` (`NombreUsuario`),
  UNIQUE KEY `Mail_UNIQUE` (`Mail`),
  UNIQUE KEY `DNI_UNIQUE` (`DNI`),
  KEY `tipoUsuario_idx` (`TipoUsuario_id`),
  CONSTRAINT `tipoUsuario` FOREIGN KEY (`TipoUsuario_id`) REFERENCES `tipoUsuario_id` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Sofia','Mollon',42226968,'smollon@udesa.edu.ar','Sofia','emprendio',NULL,NULL,NULL,NULL,NULL,NULL,3),(2,'Melanie','Giacchetta',43101641,'mgiacchetta@udesa.edu.ar','Meli','emprendio',NULL,NULL,NULL,NULL,NULL,NULL,3),(3,'Juan','Perez',19234065,'juanperez@hotmail.com','Juan03','juan0311','JuanPerez',NULL,NULL,NULL,NULL,NULL,1),(4,'Lucia','Gutierrez',17345017,'luligonzalez@hotmail.com','LuliG','luliprogramadora','Luli Gutierrez',NULL,NULL,NULL,NULL,NULL,1),(5,'Pedro','Sanchez',41506234,'pedrito10@gmail.com','Pedro10','pedritocapo','Pedro Sanchez',NULL,NULL,NULL,NULL,NULL,1),(6,'Maria','Grondona',NULL,'Infocelpouch@gmail.com','Cel Pouch','celpouch','celpouch','data:image/jpeg;base64,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','1 año o menos','Una necesidad anti robo para celulares','Mi novio y yo','No',2),(7,'Santaigo','Torralva',NULL,'popemates@gmail.com','Pope Mates','popemates','popemates','https://venti-shops-images.s3.sa-east-1.amazonaws.com/user-images/1594148250377-lg.png','Entre 1 año y 5','Surgio de las ganas de pintar y emprender ','Amigos','No',2),(8,'Silvia','Donato',NULL,'silvia.donato68@gmail.com','Dona Tejidomevieval','donatejidos','donatejidos','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkUXjEicXpLdMXSwQ5-KE9FP4q23FQwsGuvw&usqp=CAU','Más de 5 años','\"Hace más de 10 años, buscando hacer arte\n \"Hace más de 10 años, buscando hacer art\"Hace más de 10 años, buscando hacer arte\n \"','Esposo','No',2),(9,'Guadalupe','Cipollone',NULL,'cipollonejanna@gmail.com','Dulce Janna','dulcejanna','dulcejanna_','https://d26lpennugtm8s.cloudfront.net/stores/942/490/products/diseno-sin-titulo-291-29b46c66973544467b15815175299179-640-0.png','1 año o menos','Por qué un día vi a mi prima con su emprendimiento y me motive a hacer el mio','Mi hermana y yo','No',2),(10,'Francisco','Di Pietro',NULL,'dipietrofrancisco@gmail.com','Vita','vita','vitatiendasustentable','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRg91tj1GpSUbFxp-Zj6HbSRg1yhoEiLsf6g&usqp=CAU','1 año o menos','Necesidad de ayudar al medio ambiente','Mi novia y yo','No',2);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-15  9:24:14
