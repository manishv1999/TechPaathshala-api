CREATE TABLE `student` (
  `student_id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `gender` enum('male','female','others') DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `mobile_no` bigint(10) NOT NULL,
  UNIQUE KEY `contact_details` (`mobile_no`),
  `address_id` int(11) DEFAULT NULL,
  `is_active` enum('active','inactive') NOT NULL DEFAULT 'active',
  `email_verifiied` enum('verified','not verified') NOT NULL DEFAULT 'not verified',
  `mobile_verifiied` enum('verified','not verified') NOT NULL DEFAULT 'not verified',
  `last_loggedIn_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL,
  `created_by` int(11) DEFAULT 0 ,
  `updated_by` int(11) DEFAULT 0,
  `deleted_by` int(11) DEFAULT NULL
);