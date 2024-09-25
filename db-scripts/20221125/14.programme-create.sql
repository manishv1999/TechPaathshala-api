CREATE TABLE `programme` (
  `programme_id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `programme_name` varchar(255) NOT NULL,
  `description` varchar(500) NOT NULL,
  `image` varchar(255) NOT NULL,
  `programme_details_image` VARCHAR(255) NOT NULL,
  `actual_price` int(10) NOT NULL,
  `sale_price` int(10) NOT NULL,
  `duration` int(5) NOT NULL,
  `is_active` tinyint(4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL,
  `created_by` int(11) DEFAULT 0 ,
  `updated_by` int(11) DEFAULT 0,
  `deleted_by` int(11) DEFAULT NULL
);