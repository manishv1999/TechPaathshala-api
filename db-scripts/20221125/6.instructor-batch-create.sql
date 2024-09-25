CREATE TABLE `instructor_batch` (
  `instructor_batch_id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `instructor_id` int(11) NOT NULL,
  FOREIGN KEY (`instructor_id`) REFERENCES `instructor` (`instructor_id`),
  `batch_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL,
  `created_by` int(11) DEFAULT 0 ,
  `updated_by` int(11) DEFAULT 0,
  `deleted_by` int(11) DEFAULT NULL);