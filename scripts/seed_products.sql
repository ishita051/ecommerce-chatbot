-- Seed the products table with sample e-commerce data
-- This script populates the database with 100+ products across various categories

INSERT INTO products (name, description, price, original_price, discount_percentage, category, subcategory, brand, image_url, rating, review_count, in_stock, tags) VALUES

-- Electronics - Smartphones
('iPhone 15 Pro Max', 'Latest iPhone with A17 Pro chip, titanium design, and advanced camera system', 1199.00, 1299.00, 8, 'Electronics', 'Smartphones', 'Apple', '/placeholder.svg?height=300&width=300', 4.8, 2547, true, ARRAY['smartphone', 'apple', '5g', 'camera', 'premium']),

('Samsung Galaxy S24 Ultra', 'Flagship Android phone with S Pen, 200MP camera, and AI features', 1099.00, NULL, NULL, 'Electronics', 'Smartphones', 'Samsung', '/placeholder.svg?height=300&width=300', 4.7, 1823, true, ARRAY['smartphone', 'samsung', 'android', 's-pen', 'camera']),

('Google Pixel 8 Pro', 'AI-powered photography and pure Android experience', 899.00, 999.00, 10, 'Electronics', 'Smartphones', 'Google', '/placeholder.svg?height=300&width=300', 4.6, 1456, true, ARRAY['smartphone', 'google', 'android', 'ai', 'photography']),

-- Electronics - Laptops
('MacBook Pro 16-inch M3', 'Professional laptop with M3 chip, 18-hour battery life, and Liquid Retina XDR display', 2499.00, NULL, NULL, 'Electronics', 'Laptops', 'Apple', '/placeholder.svg?height=300&width=300', 4.9, 892, true, ARRAY['laptop', 'apple', 'm3', 'professional', 'creative']),

('Dell XPS 13 Plus', 'Ultra-thin laptop with 13th Gen Intel Core processors and stunning display', 1299.00, 1499.00, 13, 'Electronics', 'Laptops', 'Dell', '/placeholder.svg?height=300&width=300', 4.5, 634, true, ARRAY['laptop', 'dell', 'ultrabook', 'intel', 'portable']),

('ASUS ROG Strix G15', 'Gaming laptop with RTX 4070, AMD Ryzen 9, and 165Hz display', 1599.00, NULL, NULL, 'Electronics', 'Laptops', 'ASUS', '/placeholder.svg?height=300&width=300', 4.4, 1247, true, ARRAY['laptop', 'gaming', 'asus', 'rtx', 'amd']),

-- Electronics - Headphones
('Sony WH-1000XM5', 'Industry-leading noise canceling wireless headphones', 349.00, 399.00, 13, 'Electronics', 'Headphones', 'Sony', '/placeholder.svg?height=300&width=300', 4.7, 3421, true, ARRAY['headphones', 'sony', 'noise-canceling', 'wireless', 'premium']),

('AirPods Pro (2nd Gen)', 'Active noise cancellation, spatial audio, and MagSafe charging', 249.00, NULL, NULL, 'Electronics', 'Headphones', 'Apple', '/placeholder.svg?height=300&width=300', 4.6, 5672, true, ARRAY['earbuds', 'apple', 'noise-canceling', 'wireless', 'spatial-audio']),

('Bose QuietComfort 45', 'Comfortable noise canceling headphones with 24-hour battery', 279.00, 329.00, 15, 'Electronics', 'Headphones', 'Bose', '/placeholder.svg?height=300&width=300', 4.5, 2134, true, ARRAY['headphones', 'bose', 'noise-canceling', 'comfortable', 'long-battery']),

-- Electronics - Tablets
('iPad Pro 12.9-inch M2', 'Ultimate iPad experience with M2 chip and Liquid Retina XDR display', 1099.00, NULL, NULL, 'Electronics', 'Tablets', 'Apple', '/placeholder.svg?height=300&width=300', 4.8, 1567, true, ARRAY['tablet', 'apple', 'm2', 'professional', 'creative']),

('Samsung Galaxy Tab S9 Ultra', 'Large Android tablet with S Pen and desktop-class performance', 949.00, 1049.00, 10, 'Electronics', 'Tablets', 'Samsung', '/placeholder.svg?height=300&width=300', 4.6, 823, true, ARRAY['tablet', 'samsung', 'android', 's-pen', 'large-screen']),

-- Home & Garden - Appliances
('Dyson V15 Detect', 'Cordless vacuum with laser dust detection and powerful suction', 649.00, 749.00, 13, 'Home & Garden', 'Appliances', 'Dyson', '/placeholder.svg?height=300&width=300', 4.7, 2341, true, ARRAY['vacuum', 'cordless', 'dyson', 'cleaning', 'laser-detection']),

('Instant Pot Duo 7-in-1', 'Multi-use pressure cooker, slow cooker, rice cooker, and more', 89.00, 119.00, 25, 'Home & Garden', 'Kitchen', 'Instant Pot', '/placeholder.svg?height=300&width=300', 4.6, 8934, true, ARRAY['kitchen', 'pressure-cooker', 'multi-use', 'cooking', 'instant-pot']),

('Ninja Foodi Personal Blender', 'Compact blender for smoothies and protein shakes', 79.00, NULL, NULL, 'Home & Garden', 'Kitchen', 'Ninja', '/placeholder.svg?height=300&width=300', 4.4, 1567, true, ARRAY['blender', 'ninja', 'smoothies', 'compact', 'personal']),

('KitchenAid Stand Mixer', 'Professional 5-quart stand mixer for all your baking needs', 379.00, 429.00, 12, 'Home & Garden', 'Kitchen', 'KitchenAid', '/placeholder.svg?height=300&width=300', 4.8, 6789, true, ARRAY['mixer', 'kitchenaid', 'baking', 'professional', 'stand-mixer']),

-- Clothing & Fashion
('Nike Air Max 270', 'Comfortable running shoes with Max Air cushioning', 150.00, NULL, NULL, 'Clothing & Fashion', 'Shoes', 'Nike', '/placeholder.svg?height=300&width=300', 4.5, 3456, true, ARRAY['shoes', 'nike', 'running', 'air-max', 'comfortable']),

('Adidas Ultraboost 22', 'Premium running shoes with responsive Boost cushioning', 190.00, NULL, NULL, 'Clothing & Fashion', 'Shoes', 'Adidas', '/placeholder.svg?height=300&width=300', 4.6, 2890, true, ARRAY['shoes', 'adidas', 'running', 'boost', 'premium']),

('Levi''s 501 Original Jeans', 'Classic straight-leg jeans with authentic fit and feel', 89.00, 109.00, 18, 'Clothing & Fashion', 'Clothing', 'Levi''s', '/placeholder.svg?height=300&width=300', 4.3, 2789, true, ARRAY['jeans', 'levis', 'classic', 'denim', 'straight-leg']),

('Patagonia Better Sweater Fleece', 'Warm and comfortable fleece jacket made from recycled materials', 119.00, NULL, NULL, 'Clothing & Fashion', 'Clothing', 'Patagonia', '/placeholder.svg?height=300&width=300', 4.7, 1234, true, ARRAY['fleece', 'patagonia', 'sustainable', 'warm', 'outdoor']),

-- Books
('The Psychology of Money', 'Timeless lessons on wealth, greed, and happiness by Morgan Housel', 16.00, 20.00, 20, 'Books', 'Business & Finance', 'Harriman House', '/placeholder.svg?height=300&width=300', 4.8, 12456, true, ARRAY['book', 'finance', 'psychology', 'money', 'bestseller']),

('Atomic Habits', 'An easy and proven way to build good habits and break bad ones', 14.00, 18.00, 22, 'Books', 'Self-Help', 'Avery', '/placeholder.svg?height=300&width=300', 4.9, 23567, true, ARRAY['book', 'habits', 'self-help', 'productivity', 'bestseller']),

('Dune', 'Frank Herbert''s epic science fiction masterpiece', 12.00, NULL, NULL, 'Books', 'Science Fiction', 'Ace Books', '/placeholder.svg?height=300&width=300', 4.6, 8934, true, ARRAY['book', 'science-fiction', 'classic', 'dune', 'epic']),

('The Seven Husbands of Evelyn Hugo', 'A captivating novel about a reclusive Hollywood icon', 13.00, 17.00, 24, 'Books', 'Fiction', 'Atria Books', '/placeholder.svg?height=300&width=300', 4.9, 45678, true, ARRAY['book', 'fiction', 'hollywood', 'novel', 'bestseller']),

-- Sports & Outdoors
('Yeti Rambler 20oz Tumbler', 'Insulated stainless steel tumbler that keeps drinks hot or cold', 35.00, NULL, NULL, 'Sports & Outdoors', 'Drinkware', 'Yeti', '/placeholder.svg?height=300&width=300', 4.8, 5678, true, ARRAY['tumbler', 'yeti', 'insulated', 'stainless-steel', 'outdoor']),

('REI Co-op Trail 25 Backpack', 'Versatile daypack perfect for hiking and everyday use', 89.00, 109.00, 18, 'Sports & Outdoors', 'Backpacks', 'REI Co-op', '/placeholder.svg?height=300&width=300', 4.5, 1456, true, ARRAY['backpack', 'hiking', 'rei', 'outdoor', 'daypack']),

-- Beauty & Personal Care
('CeraVe Moisturizing Cream', 'Daily face and body moisturizer for dry to very dry skin', 19.00, NULL, NULL, 'Beauty & Personal Care', 'Skincare', 'CeraVe', '/placeholder.svg?height=300&width=300', 4.6, 7890, true, ARRAY['skincare', 'moisturizer', 'cerave', 'dry-skin', 'daily']),

('Oral-B Pro 1000 Electric Toothbrush', 'Rechargeable electric toothbrush with pressure sensor', 49.00, 69.00, 29, 'Beauty & Personal Care', 'Oral Care', 'Oral-B', '/placeholder.svg?height=300&width=300', 4.4, 3456, true, ARRAY['toothbrush', 'electric', 'oral-b', 'dental', 'rechargeable']),

-- Electronics - Smart Home
('Amazon Echo Dot (5th Gen)', 'Smart speaker with Alexa and improved sound quality', 49.00, 59.00, 17, 'Electronics', 'Smart Home', 'Amazon', '/placeholder.svg?height=300&width=300', 4.5, 12345, true, ARRAY['smart-speaker', 'alexa', 'amazon', 'voice-control', 'smart-home']),

('Fitbit Charge 5', 'Advanced fitness tracker with built-in GPS and health metrics', 179.00, 199.00, 10, 'Electronics', 'Wearables', 'Fitbit', '/placeholder.svg?height=300&width=300', 4.3, 4567, true, ARRAY['fitness-tracker', 'fitbit', 'gps', 'health', 'wearable']),

-- Toys & Games
('LEGO Creator 3-in-1 Deep Sea Creatures', 'Build a shark, squid, or angler fish with this creative set', 79.00, NULL, NULL, 'Toys & Games', 'Building Sets', 'LEGO', '/placeholder.svg?height=300&width=300', 4.7, 2345, true, ARRAY['lego', 'building', 'creative', 'sea-creatures', '3-in-1']);

-- Add more products to reach 100+ total
DO $$
DECLARE
    i INTEGER;
    categories TEXT[] := ARRAY['Electronics', 'Home & Garden', 'Clothing & Fashion', 'Books', 'Sports & Outdoors', 'Beauty & Personal Care', 'Toys & Games'];
    brands TEXT[] := ARRAY['Generic', 'Premium', 'Value', 'Pro', 'Elite', 'Quality', 'Standard', 'Advanced'];
    category_name TEXT;
    brand_name TEXT;
    product_price DECIMAL;
    product_rating DECIMAL;
    review_count INTEGER;
BEGIN
    FOR i IN 26..100 LOOP
        category_name := categories[1 + (i % array_length(categories, 1))];
        brand_name := brands[1 + (i % array_length(brands, 1))];
        product_price := (random() * 500 + 20)::DECIMAL(10,2);
        product_rating := (random() * 2 + 3)::DECIMAL(3,2);
        review_count := (random() * 5000 + 100)::INTEGER;
        
        INSERT INTO products (name, description, price, category, subcategory, brand, image_url, rating, review_count, in_stock, tags)
        VALUES (
            'Product ' || i,
            'High-quality ' || lower(category_name) || ' product with excellent features and great value',
            product_price,
            category_name,
            'General',
            brand_name,
            '/placeholder.svg?height=300&width=300',
            product_rating,
            review_count,
            CASE WHEN random() > 0.1 THEN true ELSE false END,
            ARRAY['product', lower(replace(category_name, ' & ', '-')), 'quality', 'value']
        );
    END LOOP;
END $$;
