CREATE TABLE `feedback` (
  `feedback_id` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `module_id` int(11) NOT NULL,
  FOREIGN KEY (`module_id`) REFERENCES `modules` (`modules_id`),
  `ratings` int(5) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL,
  `created_by` int(11) DEFAULT 0 ,
  `updated_by` int(11) DEFAULT 0,
  `deleted_by` int(11) DEFAULT NULL);