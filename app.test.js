const { get } = require("axios");

const app = require("./app");

let server;

beforeEach(async () => {
  server = await app.listen(3000);
});

afterEach(async () => {
  await server.close();
});

describe("GET /", () => {
  it("should return Hello Word", async () => {
    const { data } = await get("http://localhost:3000/");
    expect(data).toBe("Hello World!");
  });
});
