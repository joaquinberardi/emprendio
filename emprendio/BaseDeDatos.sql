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
  `id (PK)` int(200) NOT NULL,
  `categoria (FK)` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id (PK)`)
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
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `cantidad` bigint(20) NOT NULL,
  `precio` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id_idx` (`usuario_id`),
  KEY `producto_id_idx` (`producto_id`),
  KEY `precio_idx` (`precio`),
  CONSTRAINT `producto_id` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id (PK)`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id (PK)`) ON DELETE NO ACTION ON UPDATE NO ACTION
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
  `id` int(110) NOT NULL,
  `pregunta` text NOT NULL,
  `producto_id` int(110) DEFAULT NULL,
  `usuario_id` int(110) DEFAULT NULL,
  `respuesta` text,
  PRIMARY KEY (`id`),
  KEY `producto_idx` (`producto_id`),
  KEY `usuario_idx` (`usuario_id`),
  CONSTRAINT `producto` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id (PK)`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id (PK)`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
  `id (PK)` int(11) NOT NULL AUTO_INCREMENT,
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
  PRIMARY KEY (`id (PK)`),
  KEY `categorias_idx` (`categoria_id`),
  KEY `usuario_idx` (`usuario_id`),
  KEY `precio_idx` (`precio`),
  CONSTRAINT `categoria` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id (PK)`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `productousuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id (PK)`) ON DELETE NO ACTION ON UPDATE NO ACTION
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
  `id (PK)` int(200) NOT NULL,
  `tipoUsuario(FK)` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id (PK)`)
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
  `id (PK)` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  `Apellido` varchar(50) NOT NULL,
  `DNI` int(11) DEFAULT NULL,
  `Mail` varchar(100) NOT NULL,
  `NombreUsuario` varchar(45) NOT NULL,
  `Contraseña` varchar(300) NOT NULL,
  `RedSocial` varchar(500) DEFAULT NULL,
  `Foto` varchar(500) DEFAULT NULL,
  `TiempoCreación` varchar(500) DEFAULT NULL,
  `Historia` text,
  `Integrantes` text,
  `Empleados` varchar(2) DEFAULT NULL,
  `TipoUsuario_id` int(11) NOT NULL,
  PRIMARY KEY (`id (PK)`),
  UNIQUE KEY `NombreUsuario_UNIQUE` (`NombreUsuario`),
  UNIQUE KEY `Mail_UNIQUE` (`Mail`),
  UNIQUE KEY `DNI_UNIQUE` (`DNI`),
  KEY `tipoUsuario_idx` (`TipoUsuario_id`),
  CONSTRAINT `tipoUsuario` FOREIGN KEY (`TipoUsuario_id`) REFERENCES `tipoUsuario_id` (`id (PK)`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Sofia','Mollon',42226968,'smollon@udesa.edu.ar','Sofia','emprendio',NULL,NULL,NULL,NULL,NULL,NULL,3),(2,'Melanie','Giacchetta',43101641,'mgiacchetta@udesa.edu.ar','Meli','emprendio',NULL,NULL,NULL,NULL,NULL,NULL,3),(3,'Juan','Perez',19234065,'juanperez@hotmail.com','Juan03','juan0311','JuanPerez',NULL,NULL,NULL,NULL,NULL,1),(4,'Lucia','Gutierrez',17345017,'luligonzalez@hotmail.com','LuliG','luliprogramadora','Luli Gutierrez',NULL,NULL,NULL,NULL,NULL,1),(5,'Pedro','Sanchez',41506234,'pedrito10@gmail.com','Pedro10','pedritocapo','Pedro Sanchez',NULL,NULL,NULL,NULL,NULL,1),(6,'Maria','Grondona',NULL,'Infocelpouch@gmail.com','Cel Pouch','celpouch','celpouch',NULL,'1 año o menos','Una necesidad anti robo para celulares','Mi novio y yo','No',2),(7,'Santaigo','Torralva',NULL,'popemates@gmail.com','Pope Mates','popemates','popemates',NULL,'Entre 1 año y 5','Surgio de las ganas de pintar y emprender ','Amigos','No',2),(8,'Silvia','Donato',NULL,'silvia.donato68@gmail.com','Donatejidomevieval','donatejidos','donatejidos',NULL,'Más de 5 años','\"Hace más de 10 años, buscando hacer arte\n \"Hace más de 10 años, buscando hacer art\"Hace más de 10 años, buscando hacer arte\n \"','Esposo','No',2),(9,'Guadalupe','Cipollone',NULL,'cipollonejanna@gmail.com','DulceJanna','dulcejanna','dulcejanna_',NULL,'1 año o menos','Por qué un día vi a mi prima con su emprendimiento y me motive a hacer el mio','Mi hermana y yo','No',2),(10,'Francisco','Di Pietro',NULL,'dipietrofrancisco@gmail.com','Vita','vita','vitatiendasustentable',NULL,'1 año o menos','Necesidad de ayudar al medio ambiente','Mi novia y yo','No',2);
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

-- Dump completed on 2020-09-25 12:27:05
