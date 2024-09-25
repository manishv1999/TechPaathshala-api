CREATE TABLE `instructor` (
  `instructor_id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile_no` bigint(10) NOT NULL,
  `address_id` int(11) DEFAULT NULL,
  FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`),
  `gender` enum('male','female','others') DEFAULT NULL,
  `is_active` enum('active','inactive') NOT NULL DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL,
  `created_by` int(11) DEFAULT 0 ,
  `updated_by` int(11) DEFAULT 0,
  `deleted_by` int(11) DEFAULT NULL
);