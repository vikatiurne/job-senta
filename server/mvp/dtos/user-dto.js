module.exports = class UserDto {
  id;
  name;
  lastName;
  email;

  constructor(model) {
    this.id = model.id;
    this.name = model.name;
    this.lastName = model.lastName;
    this.email = model.email;
  }
};

