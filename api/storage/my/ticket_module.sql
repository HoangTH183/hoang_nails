/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : nails

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2021-01-15 10:07:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ticket_products
-- ----------------------------
DROP TABLE IF EXISTS `ticket_products`;
CREATE TABLE `ticket_products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ticket_id` int(10) unsigned DEFAULT NULL,
  `product_id` int(10) unsigned DEFAULT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of ticket_products
-- ----------------------------
INSERT INTO `ticket_products` VALUES ('1', null, '1', '200', '300', '2021-01-13 03:05:23', '2021-01-13 03:05:23');
INSERT INTO `ticket_products` VALUES ('2', '7', '1', '200', '300', '2021-01-13 03:06:13', '2021-01-13 03:06:13');
INSERT INTO `ticket_products` VALUES ('5', '7', '1', '0', '300', '2021-01-14 07:24:21', '2021-01-14 07:24:21');
INSERT INTO `ticket_products` VALUES ('10', '7', '1', '0', '300', '2021-01-14 07:34:59', '2021-01-14 07:34:59');
INSERT INTO `ticket_products` VALUES ('12', '7', '1', '0', '300', '2021-01-14 07:35:47', '2021-01-14 07:35:47');

-- ----------------------------
-- Table structure for ticket_services
-- ----------------------------
DROP TABLE IF EXISTS `ticket_services`;
CREATE TABLE `ticket_services` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ticket_id` int(11) DEFAULT NULL,
  `service_id` int(11) DEFAULT NULL,
  `technician_id` int(11) DEFAULT NULL,
  `discount` decimal(12,2) DEFAULT NULL,
  `price` decimal(12,2) DEFAULT NULL,
  `discount_technician_id` int(11) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of ticket_services
-- ----------------------------
INSERT INTO `ticket_services` VALUES ('3', '7', '4', '1', '200.00', '300.00', '3', '2021-01-13 03:06:13', '2021-01-13 03:06:13');
INSERT INTO `ticket_services` VALUES ('4', '7', '4', '1', '200.00', '300.00', '3', '2021-01-13 03:06:13', '2021-01-13 03:06:13');
INSERT INTO `ticket_services` VALUES ('9', '7', '4', '1', '0.00', '300.00', '3', '2021-01-14 07:24:21', '2021-01-14 07:24:21');
INSERT INTO `ticket_services` VALUES ('10', '7', '4', '1', '0.00', '300.00', '3', '2021-01-14 07:24:21', '2021-01-14 07:24:21');
INSERT INTO `ticket_services` VALUES ('19', '7', '4', '1', '0.00', '200.00', '3', '2021-01-14 07:34:59', '2021-01-14 07:34:59');
INSERT INTO `ticket_services` VALUES ('20', '7', '4', '1', '0.00', '300.00', '3', '2021-01-14 07:34:59', '2021-01-14 07:34:59');
INSERT INTO `ticket_services` VALUES ('23', '7', '4', '1', '0.00', '200.00', '3', '2021-01-14 07:35:47', '2021-01-14 07:35:47');
INSERT INTO `ticket_services` VALUES ('24', '7', '4', '1', '0.00', '300.00', '3', '2021-01-14 07:35:47', '2021-01-14 07:35:47');

-- ----------------------------
-- Table structure for tickets
-- ----------------------------
DROP TABLE IF EXISTS `tickets`;
CREATE TABLE `tickets` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `salon_id` int(11) unsigned DEFAULT NULL,
  `customer_id` int(11) unsigned DEFAULT NULL,
  `create_id` int(11) unsigned DEFAULT NULL,
  `ticket_code` varchar(255) DEFAULT NULL,
  `amount` decimal(12,2) DEFAULT NULL,
  `tip_amount` decimal(12,2) DEFAULT NULL,
  `ticket_discount` decimal(10,0) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `payments_status` int(11) DEFAULT NULL,
  `total` decimal(12,2) DEFAULT NULL,
  `is_refunded` int(1) DEFAULT NULL,
  `is_voided` int(1) DEFAULT NULL,
  `is_cancel` int(1) DEFAULT 0,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of tickets
-- ----------------------------
INSERT INTO `tickets` VALUES ('4', '1', '4', '1', '20210112T4', '0.00', '0.00', '0', 'test note', '1', '0.00', '0', '0', '0', '2021-01-12 07:59:06', '2021-01-14 16:37:33');
INSERT INTO `tickets` VALUES ('5', '1', '4', '1', '20210112T5', '0.00', '0.00', '0', 'test note', '1', '0.00', '0', '0', '0', '2021-01-12 09:02:28', '2021-01-14 16:37:33');
INSERT INTO `tickets` VALUES ('6', '1', '4', '1', '20210112T6', '0.00', '0.00', '0', 'test note', '1', '0.00', '0', '0', '0', '2021-01-12 09:03:57', '2021-01-14 16:37:33');
INSERT INTO `tickets` VALUES ('7', '1', '4', '1', '20210112T7', '800.00', '0.00', '0', 'test note', '1', '800.00', '0', '0', '0', '2021-01-12 09:09:04', '2021-01-14 16:37:33');
INSERT INTO `tickets` VALUES ('8', '1', '4', '1', '20210113T8', '0.00', '0.00', '0', 'test note', '1', '0.00', '0', '0', '0', '2021-01-13 02:25:21', '2021-01-14 16:37:33');
INSERT INTO `tickets` VALUES ('9', '1', '4', '1', '20210114T9', '0.00', '0.00', '0', null, '1', '0.00', '0', '0', '0', '2021-01-14 09:47:42', '2021-01-14 09:47:42');
INSERT INTO `tickets` VALUES ('10', '1', '4', '1', '20210114T10', '0.00', '0.00', '0', null, '1', '0.00', '0', '0', '0', '2021-01-14 09:47:56', '2021-01-14 09:47:56');
