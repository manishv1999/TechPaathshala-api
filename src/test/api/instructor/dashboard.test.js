const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../../server");
const should = chai.should();
const config = require("config");
const token = config.test.instructor_token;

chai.use(chaiHttp);

// Test the /GET route for instructor programs
describe("/GET instructor programs", () => {
  it("GET all the programs of Instructor", (done) => {
    chai
      .request(server)
      .get("/v1/instructor/dashboard/my-programs")
      .set({ authorization: `${token}` })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

// Test the /POST route of send-otp for instructor
describe("/POST send-otp", () => {
  it("Get the OTP for instructor", (done) => {
    const payload = {
      phone: "9089786756",
    };
    chai
      .request(server)
      .post("/v1/instructor/auth/send-otp")
      .send(payload)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("data");
        res.body.data.should.be.a("string");
        done();
      });
  });
});

// Test the /POST route of verify-otp for instructor
describe("/POST verify-otp", () => {
  it("Verify the OTP for instructor", (done) => {
    const payload = {
      phone: "9089786756",
      otp: 2222,
    };
    chai
      .request(server)
      .post("/v1/instructor/auth/verify-otp")
      .send(payload)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("data");
        res.body.data.should.be.a("string");
        done();
      });
  });
});
