CREATE TABLE `batch` (
  `batch_id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `program_id` int(11) NOT NULL,
  FOREIGN KEY (`programme_id`) REFERENCES `programme` (`programme_id`),
  `batch_code` VARCHAR(20) NOT NULL,
  `status` enum('upcoming','completed','live') NOT NULL DEFAULT 'upcoming',
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL,
  `created_by` int(11) DEFAULT 0,
  `updated_by` int(11) DEFAULT 0,
  `deleted_by` int(11) DEFAULT NULL
);