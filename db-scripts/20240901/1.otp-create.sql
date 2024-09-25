CREATE TABLE otp (
    otp_id INT PRIMARY KEY AUTO_INCREMENT,
    identifier VARCHAR(50) NOT NULL,
    identifier_type ENUM('mobileNumber', 'email') NOT NULL,
    otp VARCHAR(6) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    expires_at TIMESTAMP NOT NULL
);