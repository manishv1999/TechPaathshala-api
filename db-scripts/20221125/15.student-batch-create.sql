CREATE TABLE `student_batch` (
  `student_batch_id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `student_id` int(11) NOT NULL,
  FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`),
  `batch_id` int(11) NOT NULL,
  FOREIGN KEY (`batch_id`) REFERENCES `batch` (`batch_id`),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL,
  `created_by` int(11) DEFAULT 0 ,
  `updated_by` int(11) DEFAULT 0,
  `deleted_by` int(11) DEFAULT NULL
);