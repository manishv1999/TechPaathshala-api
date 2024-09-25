CREATE TABLE counselling_requests(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    experience TEXT,
    background_field VARCHAR(255),
    mode_of_participation VARCHAR(50),
    slot_date VARCHAR(255)
    slot_time TIME,
    utm_source VARCHAR(255),
    utm_campaign VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);