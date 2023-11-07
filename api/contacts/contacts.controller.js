const service = require("./contacts.service");

const VALID_PROPERTIES = [
    "id",
    "first_name",
    "last_name",
    "phone",
    "email",
    "message",
    "created_at",
    "updated_at",
  ];

function hasOnlyValidProperties(req, res, next) {
    const { data = {} } = req.body;
  
    const invalidFields = Object.keys(data).filter(
      (field) => !VALID_PROPERTIES.includes(field)
    );
  
    if (invalidFields.length) {
      return next({
        status: 400,
        message: `Invalid field(s): ${invalidFields.join(", ")}`,
      });
    }
    next();
  }

  async function create(req, res) {
    const data = await service.create(req.body.data);
    res.status(201).json({ data });
  }

  async function list(req, res) {
    const data = await service.list();
    res.json({ data });
}

module.exports = {
    create,
    list
};
