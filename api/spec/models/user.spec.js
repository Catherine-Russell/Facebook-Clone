const mongoose = require("mongoose");

require("../mongodb_helper");
const User = require("../../models/user");

describe("User model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it("has an email address", () => {
    const user = new User({
      email: "someone@example.com",
      password: "password",
      avatar: "public/images/avatars/1.svg",
    });
    expect(user.email).toEqual("someone@example.com");
  });

  it("has a password", () => {
    const user = new User({
      email: "someone@example.com",
      password: "password",
      avatar: "public/images/avatars/1.svg",
    });
    expect(user.password).toEqual("password");
  });

  it("has a avatar", () => {
    const user = new User({
      email: "someone@example.com",
      password: "password",
      avatar: "public/images/avatars/1.svg",
    });
    expect(user.avatar).toEqual("public/images/avatars/1.svg");
  });

  it("can list all users", (done) => {
    User.find((err, users) => {
      expect(err).toBeNull();
      expect(users).toEqual([]);
      done();
    });
  });

  it("can save a user", (done) => {
    const user = new User({
      email: "someone@example.com",
      password: "password",
      avatar: "public/images/avatars/1.svg",
    });

    user.save((err) => {
      expect(err).toBeNull();

      User.find((err, users) => {
        expect(err).toBeNull();

        expect(users[0]).toMatchObject({
          email: "someone@example.com",
          password: "password",
          avatar: "public/images/avatars/1.svg",
        });
        done();
      });
    });
  });

  // it("default value when no avatar provided", async (done) => {
  //   const user = new User({
  //     email: "test@test.com",
  //     password: "test",
  //     avatar: null
  //   });
  //   expect(user.avatar).toEqual("public/images/avatars/0.svg");
  // })
});
