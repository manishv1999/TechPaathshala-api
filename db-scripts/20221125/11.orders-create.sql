CREATE TABLE `orders` (
  `order_id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `batch_id` int(11) NOT NULL,
  FOREIGN KEY (`batch_id`) REFERENCES `batch` (`batch_id`),
  `student_id` int(11) NOT NULL,
  FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`),
  `amount` int(10) NOT NULL,
  `disc/coupon` varchar(15) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
);
