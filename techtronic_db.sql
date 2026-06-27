-- MySQL dump 10.13  Distrib 8.0.45, for macos15 (arm64)
--
-- Host: 127.0.0.1    Database: techtronic
-- ------------------------------------------------------
-- Server version	9.5.0

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

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `headline` varchar(255) NOT NULL,
  `news` text NOT NULL,
  `category` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'2026-01-12','Las casas inteligentes ahora podrán predecir el humor de sus dueños','Una nueva actualización de software permite a los asistentes virtuales ajustar la iluminación y la música analizando el tono de voz y las expresiones faciales.','Domótica'),(2,'2026-01-25','Cirujano robótico realiza con éxito la primera operación transatlántica','Un médico en Nueva York operó a un paciente en Londres utilizando una conexión 6G de ultra-baja latencia y brazos robóticos de alta precisión.','Domótica'),(3,'2026-02-05','Científicos crean una batería transparente que se carga con el sol de las ventanas','Este avance permitiría que los rascacielos de cristal se conviertan en gigantescas plantas de energía sin necesidad de paneles solares opacos.','Ciencia'),(4,'2026-02-20','Gafas de realidad aumentada sustituirán a los smartphones en 2028','Los principales analistas sugieren que las interfaces holográficas harán que las pantallas físicas de los teléfonos queden obsoletas muy pronto.','Smartphones'),(5,'2026-03-18','El primer taxi volador autónomo completa su ruta urbana en Tokio','El vehículo eléctrico despegó verticalmente y transportó a dos pasajeros a través de la ciudad en menos de diez minutos, evitando el tráfico.','Domótica'),(6,'2026-03-26','Encuentran agua líquida bajo la superficie de Marte gracias a nuevos drones','Una flota de mini-drones equipados con radares de penetración terrestre ha detectado depósitos masivos de agua, facilitando futuras misiones.','Ciencia'),(7,'2026-04-02','El futuro de la tecnología wearable en 2026','La tecnología vestible evoluciona a un ritmo sin precedentes, con la aparición de nuevas innovaciones que prometen revolucionar la forma en que interactuamos con dispositivos y controlamos nuestra salud.','Destacado'),(8,'2026-04-16','Los 5 mejores smartphones de 2025: Un análisis exhaustivo','Hemos probado los últimos smartphones insignia para ayudarte a hacer una decisión informada sobre tu próxima compra.','Smartphones');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-01 12:37:29
