/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : nails

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2021-01-04 10:04:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for customer_groups
-- ----------------------------
DROP TABLE IF EXISTS `customer_groups`;
CREATE TABLE `customer_groups` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `salon_id` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of customer_groups
-- ----------------------------
INSERT INTO `customer_groups` VALUES ('1', 'Group vip 2', '1', null, '2021-01-04 02:34:28', '2021-01-04 02:37:02');
INSERT INTO `customer_groups` VALUES ('2', 'Group vip', '1', '1', '2021-01-04 02:39:00', '2021-01-04 02:39:00');
INSERT INTO `customer_groups` VALUES ('3', 'Group vip 123', '1', '1', '2021-01-04 02:39:05', '2021-01-04 02:39:05');

-- ----------------------------
-- Table structure for customers
-- ----------------------------
DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `reward_point` varchar(0) DEFAULT NULL,
  `fb_link` varchar(255) DEFAULT NULL,
  `instagram_link` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `salon_id` int(11) unsigned DEFAULT NULL,
  `number_of_visit` int(11) DEFAULT NULL,
  `type_of_member` varchar(255) DEFAULT NULL,
  `is_active` varchar(255) DEFAULT NULL,
  `customer_group_id` int(11) unsigned DEFAULT NULL,
  `total_expense` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of customers
-- ----------------------------
