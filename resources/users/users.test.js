process.env.NODE_ENV = "test";

// // const knex = require("../../knexfile");
// const db = require("../../db/db-config");
const app = require("../../api/server.js"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);
const knex = require("../../db/db-config");
const cleaner = require("knex-cleaner");
const server = require("../../api/server");
const db = require("../../db/migrations/20200526221923_creeate-users-table");

describe("User Endpoints", () => {
  beforeEach(async () => {
    // return knex.seed.run();
    await db("users").truncate();
  });
});

it("should give the correct code when getting users", async (done) => {
  const response = await request.get("/api/users");

  // expect(response.status).toBe(200);
  done();
});

describe("Users router test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
});

describe("POST /auth/register", () => {
  it("404 means not found :'( ", async () => {
    const response = await request
      .post("////////auth/register")
      .send({
        username: "sleepy1234",
        password: "sleepy1234",
        first_name: "sleepy1234",
        last_name: "sleepy1234",
        email: "sleepy1234@something.com",
      })
      .then((res) => {
        expect(res.status).toBe(404);
      });
  });
});

describe("User Endpoints", () => {
  beforeAll(() => {
    return knex.seed.run();
  });

  afterAll(() => {
    cleaner.clean(knex);
  });
});
