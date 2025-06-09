-- Seed the users table with sample user accounts
-- This script creates demo users for testing the authentication system

INSERT INTO users (email, name, password_hash) VALUES
('demo@example.com', 'Demo User', '$2b$10$example_hash_for_demo123'), -- Password: demo123
('admin@example.com', 'Admin User', '$2b$10$example_hash_for_admin123'), -- Password: admin123
('test@example.com', 'Test User', '$2b$10$example_hash_for_test123'), -- Password: test123
('user1@example.com', 'John Doe', '$2b$10$example_hash_for_user123'), -- Password: user123
('user2@example.com', 'Jane Smith', '$2b$10$example_hash_for_user456'); -- Password: user456

-- Note: In a real application, these password hashes would be properly generated
-- using bcrypt or another secure hashing algorithm. These are placeholder values.

COMMENT ON TABLE users IS 'Demo users for testing the e-commerce chatbot authentication system';
