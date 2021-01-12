/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : nails

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-12-29 15:06:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for salons
-- ----------------------------
DROP TABLE IF EXISTS `salons`;
CREATE TABLE `salons` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fb_link` varchar(255) DEFAULT NULL,
  `instagram_link` varchar(255) DEFAULT NULL,
  `opening_hour` time DEFAULT NULL,
  `closing_hour` time DEFAULT NULL,
  `week_start_day` int(11) DEFAULT 0 COMMENT '0: sun, 1: mon ...',
  `owner_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of salons
-- ----------------------------
INSERT INTO `salons` VALUES ('1', 'Salon 1', 'Nhà của tôi', '091234656', 'salon1@email.com', 'fb/salon1', 'fb/salon2', '06:00:00', '22:00:00', '0', null);
