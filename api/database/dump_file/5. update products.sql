/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : nails

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2021-01-06 14:21:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `discount_price` decimal(10,0) DEFAULT NULL,
  `tax_percent` decimal(10,0) DEFAULT NULL,
  `estimate_time` int(11) unsigned DEFAULT NULL COMMENT 'Số phút',
  `salon_id` varchar(255) DEFAULT NULL,
  `product_category_id` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES ('1', 'Group vip 123', '1234', null, '22', '200', '1', '1', '1', '2021-01-05 06:55:37', '2021-01-05 06:55:37');
INSERT INTO `products` VALUES ('2', 'Group vip 123', '1234', null, '22', '200', '1', null, '1', '2021-01-05 07:38:23', '2021-01-05 07:38:23');
INSERT INTO `products` VALUES ('3', 'Group vip 123', '1234', null, '22', '200', '1', '1', '1', '2021-01-05 07:38:57', '2021-01-05 07:38:57');
INSERT INTO `products` VALUES ('4', 'Group vip 123', '1234', null, '22', '200', '1', '1', '1', '2021-01-05 09:50:21', '2021-01-05 09:50:21');
