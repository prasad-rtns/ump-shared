export async function connect(config) {
  const { MongoClient } = await import('mongodb');

  const client = new MongoClient(config.connectionString);

  await client.connect();

  return client.db();
}