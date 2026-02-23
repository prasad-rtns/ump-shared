export async function connect(config) {
  const oracledb = await import('oracledb');

  const connection = await oracledb.getConnection({
    connectionString: config.connectionString,
    user: config.user,
    password: config.password
  });

  return connection;
}