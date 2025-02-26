import orchestrator from "tests/orchestrator";
import database from "infra/database.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

describe("POST /api/v1/users", () => {
  describe("anonymous user", () => {
    test("With Unique and valid data", async () => {
      await database.query({
        text: "Insert into users (username,email,password,cpf) values($1,$2,$3,$4)",
        values: ["fagoabreu", "fagoabreu@gmail.com", "password", "11111111111"],
      });
      await database.query({
        text: "Insert into users (username,email,password,cpf) values($1,$2,$3,$4)",
        values: ["fagoabreU", "Fagoabreu@gmail.com", "password", "11111111112"],
      });

      const users = await database.query("Select * from Users;");
      console.log(users.rows);

      const response = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
      });
      expect(response.status).toBe(201);

      const responseBody = await response.json();

      expect(Array.isArray(responseBody)).toBe(true);
      expect(responseBody.length).toBeGreaterThan(0);
    });
  });
});
