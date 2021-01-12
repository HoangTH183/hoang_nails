/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : back

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2021-01-08 16:15:05
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of customer_groups
-- ----------------------------

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
  `reward_point` int(13) DEFAULT NULL,
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

-- ----------------------------
-- Table structure for employees
-- ----------------------------
DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role_id` int(3) NOT NULL COMMENT '1: admin/3: Chủ tiệm',
  `salon_id` int(11) DEFAULT 0,
  `full_name` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `address` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pass_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `commission_percent` decimal(10,0) DEFAULT NULL,
  `commission_cash_percent` decimal(10,0) DEFAULT NULL,
  `commission_check_percent` decimal(10,0) DEFAULT NULL,
  `is_active` int(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`,`username`,`email`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of employees
-- ----------------------------

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for groups_customers
-- ----------------------------
DROP TABLE IF EXISTS `groups_customers`;
CREATE TABLE `groups_customers` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) DEFAULT NULL,
  `customer_group_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of groups_customers
-- ----------------------------

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES ('1', '2014_10_12_000000_create_users_table', '1');
INSERT INTO `migrations` VALUES ('2', '2014_10_12_100000_create_password_resets_table', '1');
INSERT INTO `migrations` VALUES ('3', '2019_08_19_000000_create_failed_jobs_table', '1');

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of password_resets
-- ----------------------------

-- ----------------------------
-- Table structure for product_categories
-- ----------------------------
DROP TABLE IF EXISTS `product_categories`;
CREATE TABLE `product_categories` (
  `id` int(13) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT '',
  `salon_id` int(13) unsigned DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of product_categories
-- ----------------------------

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
  `salon_id` varchar(255) DEFAULT NULL,
  `product_category_id` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of products
-- ----------------------------

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
  `is_active` int(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of salons
-- ----------------------------

-- ----------------------------
-- Table structure for service_categories
-- ----------------------------
DROP TABLE IF EXISTS `service_categories`;
CREATE TABLE `service_categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `is_active` int(1) DEFAULT NULL,
  `salon_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of service_categories
-- ----------------------------

-- ----------------------------
-- Table structure for services
-- ----------------------------
DROP TABLE IF EXISTS `services`;
CREATE TABLE `services` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `tax_percent` decimal(10,0) DEFAULT NULL,
  `estimate_time` int(11) unsigned DEFAULT NULL COMMENT 'Số phút',
  `salon_id` varchar(255) DEFAULT NULL,
  `service_category_id` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of services
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `week_start_day` int(1) DEFAULT NULL,
  `user_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '1: admin/3: Chủ tiệm',
  `is_active` int(1) DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`,`username`,`email`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'admin', 'admin', 'nguyen@gmail.com', '2020-12-28 17:02:17', '$2y$12$R7ITJM26rmMKh2kuqRqVuOxRv8POkOO4R2wy2i7VYCQMEiCLxUmuy', null, null, null, null, null, null, '1', null, null, null);
INSERT INTO `users` VALUES ('5', 'Nguyễn Quảng Đại', 'nguyenquangdai', 'nguyenquangdai0409@gmail.com', null, '$2y$10$QTAXuZnBJ/ydPRakCmneB.cZiR.Ww8yn/4EPUhsJzh3x.dbsJLR6e', null, 'Xóm 9, Xuân Đài, Xuân Trường, Nam Định', '0966 056 332', 'https://www.facebook.com/nguyen.quang.dai.dx', 'https://www.facebook.com/nguyen.quang.dai.dx', '1', '3', '1', '2020-12-30 03:59:59', '2020-12-30 03:59:59');
INSERT INTO `users` VALUES ('6', 'Nguyễn Quảng Đại', 'nguyenquangdai12', 'nguyenquangdai04091@gmail.com', null, '$2y$10$lw5q7eH5iFekoeTJkEOAnOZh5wd/OQbdla37MEsCLpkFC9CdV/NoC', null, 'Xóm 9, Xuân Đài, Xuân Trường, Nam Định', '0966 056 332', 'https://www.facebook.com/nguyen.quang.dai.dx', 'https://www.facebook.com/nguyen.quang.dai.dx', '1', '3', '1', '2020-12-30 04:25:21', '2020-12-30 04:25:21');
INSERT INTO `users` VALUES ('7', 'Nguyễn Quảng Đại', 'nguyenquangdai121', 'abc@gmail.com', null, '$2y$10$VQka/LCK3I9Bro38E4p2d.rgyqE0AaJ6A8WAhNWQI2hKeREpT3YFS', null, 'Xóm 9, Xuân Đài, Xuân Trường, Nam Định', '0966 056 111', 'https://www.facebook.com/nguyen.quang.dai.dx', 'https://www.facebook.com/nguyen.quang.dai.dx', '1', '3', '1', '2020-12-31 02:30:30', '2020-12-31 06:29:15');
