module.exports = class UserDto {
  id;
  username;
  lastName;
  email;

  constructor(model) {
    this.id = model.id;
    this.username = model.username;
    this.lastName = model.lastName;
    this.email = model.email;
  }
};

