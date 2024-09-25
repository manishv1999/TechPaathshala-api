CREATE TABLE `address` (
  `address_id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `address_line1` varchar(255) NOT NULL,
  `address_line2` varchar(255) DEFAULT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `zip` int(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT  current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL,
  `created_by` int(11) DEFAULT 0,
  `updated_by` int(11) DEFAULT 0,
  `deleted_by` int(11) DEFAULT NULL
);