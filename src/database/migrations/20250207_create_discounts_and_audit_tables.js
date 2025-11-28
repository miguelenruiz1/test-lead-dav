-- Tabla para guardar el descuento aplicado al carrito
CREATE TABLE discounts (
    id SERIAL PRIMARY KEY,
    cart_id INT NOT NULL,
    rule_applied VARCHAR(100) NOT NULL,
    original_amount DECIMAL(10,2) NOT NULL,
    discount_amount DECIMAL(10,2) NOT NULL,
    final_amount DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla para registrar auditorías de descuentos
CREATE TABLE discount_audit_logs (
    id SERIAL PRIMARY KEY,
    discount_id INT NOT NULL,
    user_id INT NOT NULL,
    cart_snapshot JSONB NOT NULL,
    rule_applied VARCHAR(100) NOT NULL,
    original_amount DECIMAL(10,2) NOT NULL,
    discount_amount DECIMAL(10,2) NOT NULL,
    final_amount DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),

    FOREIGN KEY (discount_id) REFERENCES discounts(id)
);
