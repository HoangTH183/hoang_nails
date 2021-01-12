/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : nails

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-12-31 15:45:20
*/

SET FOREIGN_KEY_CHECKS=0;

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of employees
-- ----------------------------
INSERT INTO `employees` VALUES ('1', 'salon1', 'nguyen@gmail.com', '2020-12-28 17:02:17', '$2y$12$OT28iNhNSOZQl/t1LZOk4Ox6NpYOf5Xm.w72Wp2PiGOjX9MHkgpoS', null, '1', '1', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `employees` VALUES ('3', 'nguyenquangdai', 'nguyenquangdai0409@gmail.com', null, '123@123a', null, '1', '4', 'Nguyễn Quảng Đại', 'Xóm 9, Xuân Đài, Xuân Trường, Nam Định', '0966 056 332', '', 'https://www.facebook.com/nguyen.quang.dai.dx', '22', '11', '10', null, '2020-12-30 08:41:07', '2020-12-30 08:41:07');
INSERT INTO `employees` VALUES ('4', 'nguyenquangdai121', 'abc@gmail.com', null, '$2y$10$FASzCNfwla8VbY9LA7djEu8jh6Wcf/f7/.LC29MH0xMcF1f0VY14S', null, '1', '4', 'Nguyễn Quảng Đại', 'Xóm 9, Xuân Đài, Xuân Trường, Nam Định', '0966 056 332', '1256', 'https://www.facebook.com/nguyen.quang.dai.dx', '1', '1', '1', null, '2020-12-31 04:01:22', '2020-12-31 04:01:22');
INSERT INTO `employees` VALUES ('5', 'nguyenquangdai1211', 'a1bc@gmail.com', null, '$2y$10$UoQqzeW/OnQtDh0k8KKT5OdNhWROxWFKkgAV35XuM0beBx5Q9E8kC', null, '1', '4', 'Nguyễn Quảng Đại', 'Xóm 9, Xuân Đài, Xuân Trường, Nam Định', '0966 056 332', '12526', 'https://www.facebook.com/nguyen.quang.dai.dx', '1', '1', '1', null, '2020-12-31 04:47:58', '2020-12-31 04:47:58');
INSERT INTO `employees` VALUES ('7', 'nguyenquangdai123', 'nguyenquangdai04091@gmail.com', null, '123@123a', null, '1', '11', 'Nguyễn Quảng Đại', 'Xóm 9, Xuân Đài, Xuân Trường, Nam Định', '0966 056 332', '', '', null, null, null, null, '2020-12-31 06:46:53', '2020-12-31 06:46:53');

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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of salons
-- ----------------------------
INSERT INTO `salons` VALUES ('1', 'Salon 1', 'Nhà của tôi', '091234656', 'salon1@email.com', 'fb/salon1', 'fb/salon2', '06:00:00', '22:00:00', '0', '2', null, null, '2020-12-30 16:21:36');
INSERT INTO `salons` VALUES ('4', 'Nguyễn Quảng Đại Salon', 'Xóm 9, Xuân Đài, Xuân Trường, Nam Định', '0966 056 332', 'nguyenquangdai0409@gmail.com', 'https://www.facebook.com/nguyen.quang.dai.dx', 'https://www.facebook.com/nguyen.quang.dai.dx', '20:20:02', '20:20:20', '2', '1', '1', '2020-12-30 08:41:07', '2020-12-30 09:15:31');
INSERT INTO `salons` VALUES ('11', 'Nguyễn Quảng Đại', 'Xóm 9, Xuân Đài, Xuân Trường, Nam Định', '0966 056 332', 'nguyenquangdai04091@gmail.com', 'https://www.facebook.com/nguyen.quang.dai.dx', 'https://www.facebook.com/nguyen.quang.dai.dx', '20:20:20', '20:20:20', '1', '1', '1', '2020-12-31 06:46:53', '2020-12-31 06:46:53');

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
