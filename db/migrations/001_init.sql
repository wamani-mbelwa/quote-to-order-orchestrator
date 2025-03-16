CREATE TABLE IF NOT EXISTS quotes (id UUID PRIMARY KEY, part_number TEXT NOT NULL, quantity INT NOT NULL, created_at TIMESTAMPTZ NOT NULL, status TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS orders (id UUID PRIMARY KEY, quote_id UUID NOT NULL REFERENCES quotes(id), supplier_id TEXT NOT NULL, price_cents INT NOT NULL, created_at TIMESTAMPTZ NOT NULL, status TEXT NOT NULL);
CREATE INDEX IF NOT EXISTS idx_orders_quote_id ON orders(quote_id);
