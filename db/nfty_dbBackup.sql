-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: nfty_db
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `collection`
--

DROP TABLE IF EXISTS `collection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collection` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collection`
--

LOCK TABLES `collection` WRITE;
/*!40000 ALTER TABLE `collection` DISABLE KEYS */;
INSERT INTO `collection` VALUES (1,'avgJoe','2021-09-10 20:15:38','2021-09-10 20:15:38'),(2,'crazyJoe','2021-09-10 20:15:38','2021-09-10 20:15:38'),(3,'Benny','2021-09-10 20:15:38','2021-09-10 20:15:38'),(4,'HeadsUp','2021-09-10 20:15:38','2021-09-10 20:15:38'),(5,'TEXT','2021-09-10 20:15:38','2021-09-10 20:15:38'),(6,'OWL','2021-09-10 20:15:38','2021-09-10 20:15:38'),(7,'HIP GUY','2021-09-10 20:15:38','2021-09-10 20:15:38');
/*!40000 ALTER TABLE `collection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nft`
--

DROP TABLE IF EXISTS `nft`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nft` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `artist` varchar(255) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `collection_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `collection_id` (`collection_id`),
  CONSTRAINT `nft_ibfk_1` FOREIGN KEY (`collection_id`) REFERENCES `collection` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nft`
--

LOCK TABLES `nft` WRITE;
/*!40000 ALTER TABLE `nft` DISABLE KEYS */;
INSERT INTO `nft` VALUES (1,'white space','Billy','white_space.png','white picture',1,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(2,'black space','Billy','black_space.png','black picture',1,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(3,'Blue Space','Bob','BlueSpace.png','Blue Picture',1,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(4,'Radical Space','Chad','Rad.png','A Radical picture dude!',2,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(5,'Political Space','Jimmie','pol.png','A Picture Divided',2,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(6,'Alone Space','Sara','alone.png','A Picture',2,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(7,'PhotoBenny','adrian','Benny.png','Photo of My Dog Benny',3,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(8,'Baby B','adrian','babyb.png','Photo of Benny as puppy',3,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(9,'Bennersons','adrian','Bennersons.png','Photo of My Dog Benny',3,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(10,'Bennoodles','adrian','Bennoodles.png','Benny curled',3,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(11,'Beniot','adrian','Beniot.png','Benny sitting',3,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(12,'PhotoBenny','adrian','Benny.png','Photo of My Dog Benny',3,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(13,'Avaitor','adrian','cog1.png','Glasses and a cig',4,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(14,'Fire','adrian','cog2.png','Passed Hero',4,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(15,'Stealth','adrian','cog3.png','Sneaky Sneaky',4,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(16,'Summer','adrian','cog4.png','Beach hat and glasses',4,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(17,'Thug','adrian','cog5.png','Tough guy with shades',4,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(18,'Bandit','adrian','cog6.png','A well educated bandit',4,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(19,'Regular Text on a Black Background','Pat','regular-text.jpg','Just text on a black background',5,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(20,'EXPENSIVE ORANGE TEXT on a Black Background','Pat','expensive-text.jpg','This is more expensive because NFTs',5,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(21,'Regular Owl','Pat','regular-owl.jpg','Just a plain owl from the OWL collection',6,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(22,'Inverted Owl','Pat','invert-owl.jpg','Inverted owl from the OWL collection',6,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(23,'Fried Owl','Pat','fried-owl.jpg','The rarest of owls, the inverted owl, from the OWL collection',6,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(24,'Hip Guy','Pat','hip-guy.jpg','Just a hip guy from the HIP GUY collection',7,'2021-09-10 20:15:38','2021-09-10 20:15:38'),(25,'30 Degree Hip Guy','Pat','hip-guy2.jpg','THE PREMIUM 30 DEGREE ROTATED HIP GUY. The pinnacle of the HIP GUY collection',7,'2021-09-10 20:15:38','2021-09-10 20:15:38');
/*!40000 ALTER TABLE `nft` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Joe','J@gmail.com','Joe123'),(2,'C-Jay','CJ@gmail.com','CJay123');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-10 14:33:08
