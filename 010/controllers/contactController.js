const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc Get all contacts
// @route GET /contacts

const getAllContacts = asyncHandler(async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.render("index", { contacts });
  } catch (err) {
    res.send(err.message);
  }
});

// @desc View add contact form
// @route GET /contacts/add
const addContactForm = (req, res) => {
  res.render("add");
};

// @desc Create a contact
// @route POST /contacts/add
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  // res.status(201).send("Create Contacts");
  res.redirect("/contacts");
});

// @desc Get contact
// @route GET /contacts/:id
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("update", { contact });
});

// @desc Update contact
// @route PUT /contacts/:id
const updateContact = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { name, email, phone } = req.body;
  // const contact = await Contact.findById(id);
  // if (!contact) {
  //   res.status(404);
  //   throw new Error("Contact not found");
  // }

  // contact.name = name;
  // contact.email = email;
  // contact.phone = phone;
  // contact.save();

  // res.status(200).json(contact);

  const updateContact = await Contact.findByIdAndUpdate(
    id,
    { name, email, phone },
    { new: true }
  );
  // res.status(200).send(updateContact);
  res.redirect("/contacts");
});

// @desc Delete contact
// @route DELETE /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/contacts");
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  addContactForm,
};
