import { Pool, QueryConfig, QueryResult } from "pg";
const pool = new Pool({
  user: "postgres",
  password: "#Laviz7cool",
  host: "localhost",
  port: 5432,
  database: "learn",
});
interface QueryFunction {
  (text: string, params?: any[]): Promise<QueryResult>;
}
const query: QueryFunction = (text, params) => pool.query(text, params);

export default { query };
