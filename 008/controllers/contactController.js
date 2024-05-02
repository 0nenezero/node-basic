const asyncHandler = require("express-async-handler");

// @desc Get all contacts
// @route GET /contacts

const getAllContacts = asyncHandler(async (req, res) => {
  try {
    res.status(200).send("Contacts Page");
  } catch (err) {
    res.send(err.message);
  }
});

// @desc Create a contact
// @route POST /contacts
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).send(`A required value has not been entered.`);
  }
  res.status(201).send("Create Contacts");
});

// @desc Get contact
// @route GET /contacts/:id
const getContact = asyncHandler(async (req, res) => {
  res.status(200).send(`View Contacts ${req.params.id}`);
});

// @desc Update contact
// @route PUT /contacts/:id
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).send(`Update Contacts ${req.params.id}`);
});

// @desc Delete contact
// @route DELETE /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).send(`Delete Contacts ${req.params.id}`);
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
