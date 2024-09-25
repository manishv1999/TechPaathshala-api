CREATE TABLE `lecture_batch` (
  `lecture_batch_id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `lecture_id` int(11) NOT NULL,
  FOREIGN KEY (`lecture_id`) REFERENCES `lecture` (`lecture_id`),
  `batch_id` int(11) NOT NULL,
  FOREIGN KEY (`batch_id`) REFERENCES `batch` (`batch_id`),
  `start_at` datetime NOT NULL,
  `ends_on` datetime NOT NULL,
  `status` enum('coming_soon','live','completed') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_by` int(11) DEFAULT 0,
  `updated_by` int(11) DEFAULT 0
);