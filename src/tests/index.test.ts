import { beforeAll, describe, expect, it, test, vi } from "vitest";
import request from "supertest";
import { app } from "../index";
import resetDb from "./helpers/reset-db";

describe("POST /add", () => {
  beforeAll(async () => {
    console.log("Clearing database");
    await resetDb();
  });
  test("should return the sum of the numbers", async () => {
    const { status, body } = await request(app)
      .post("/add")
      .send({ a: 1, b: 2 });
    expect(status).toBe(200);
    expect(body).toEqual({ add: 3 });
  });
  test("should return an error if the input is invalid", async () => {
    const { status, body } = await request(app)
      .post("/add")
      .send({ a: "a", b: "b" });
    expect(status).toBe(400);
    expect(body).toEqual({ error: "Invalid input" });
  });
  test("should return an error if the input is missing", async () => {
    const { status, body } = await request(app).post("/add").send({});
    expect(status).toBe(400);
    expect(body).toEqual({ error: "Invalid input" });
  });
  test("should return an error if any of the input is missing", async () => {
    const { status, body } = await request(app).post("/add").send({ a: 1 });
    expect(status).toBe(400);
    expect(body).toEqual({ error: "Invalid input" });
  });
  test("should return an error if the input is too big", async () => {
    const { status, body } = await request(app)
      .post("/add")
      .send({ a: 1000001, b: 1 });
    expect(status).toBe(422);
    expect(body).toEqual({
      message: "Sorry we dont support big numbers",
    });
  });
});
