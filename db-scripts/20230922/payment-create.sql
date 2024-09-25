create table payment 
(
	payment_id int(11) AUTO_INCREMENT PRIMARY KEY,
    order_id varchar(255) NOT NULL,
	reference_id INT(11) NOT NULL,
    transaction_id varchar(255),
    signature varchar(255),
    payment_status enum('SUCCESS', 'FAILED', 'PENDING') default 'PENDING', 
	payment_json JSON,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);