const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

describe("GET /", () => {
    it("Should tell the user they are at the homepage", async () => {
        const response = await request.get("/");

        expect(response.status).toBe(200);
        expect(response.text).toBe("Homepage");
    });
});

describe("GET /contact", () => {
    it("Should tell the user they are at the contact page", async () => {
        const response = await request.get("/contact");

        expect(response.status).toBe(200);
        expect(response.text).toBe("Contact");
    });
});

describe("GET /user/*", () => {
    it("Should return a json response with the Khalid's data", async () => {
        const response = await request.get("/user/Khalid");
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toBe("application/json; charset=utf-8");
        expect(response.body.username).toBe("Khalid");
    });

    it("Should return a json response with the Samy's data", async () => {
        const response = await request.get("/user/Samy");
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toBe("application/json; charset=utf-8");
        expect(response.body.username).toBe("Samy");
    });

    it("Should return a json response with the Ahmed's data", async () => {
        const response = await request.get("/user/Ahmed");
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toBe("application/json; charset=utf-8");
        expect(response.body.username).toBe("Ahmed");
    });
});