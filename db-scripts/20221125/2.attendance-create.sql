CREATE TABLE `attendance` (
  `attendence_id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `student_id` int(11) NOT NULL,
  FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`),
  `lecture_id` int(11) NOT NULL,
  FOREIGN KEY (`lecture_id`) REFERENCES `lecture_batch` (`lecture_batch_id`),
  `attendance_mark_at` datetime NOT NULL DEFAULT current_timestamp(),
  `lattitude` decimal(10,8) NOT NULL,
  `longitude` decimal(11,8) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
);
