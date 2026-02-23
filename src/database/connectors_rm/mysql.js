export async function connect(config) {
  const mysql = await import('mysql2/promise');
  const { drizzle } = await import('drizzle-orm/mysql2');

  const conn = await mysql.createConnection(config.connectionString);

  return drizzle(conn);
}