-- Создание таблицы users для хранения заявок с формы контактов
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Включаем Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Политика для вставки данных (любой может отправить форму)
CREATE POLICY "Allow anonymous inserts" ON users
  FOR INSERT
  WITH CHECK (true);

-- Политика для чтения (только для аутентифицированных пользователей - админов)
CREATE POLICY "Allow authenticated reads" ON users
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Создаём индекс для быстрого поиска по email
CREATE INDEX IF NOT EXISTS users_email_idx ON users(email);

-- Создаём индекс для сортировки по дате
CREATE INDEX IF NOT EXISTS users_created_at_idx ON users(created_at DESC);
