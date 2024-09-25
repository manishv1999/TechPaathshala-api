CREATE TABLE `enrolled_programme` (
  `enrolled_programme_id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `programme_id` int(11) NOT NULL ,
  (`programme_id`) REFERENCES `programme` (`programme_id`),
  `student_id` int(11) NOT NULL,
  FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`),
  `payment_type` enum('full','emi') NOT NULL,
  `paid_amount` int(10) NOT NULL,
  `balance_amount` int(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL,
  `created_by` int(11) DEFAULT 0,
  `updated_by` int(11) DEFAULT 0,
  `deleted_by` int(11) DEFAULT NULL
);