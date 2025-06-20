const asyncHandler = require('express-async-handler')

const getContacts= asyncHandler(async(req, res) => {
  res.status(200).json({
    message: 'get all contacts',
  });
});

const getContact =asyncHandler(async(req, res) => {
  res.status(200).json({
    message: `get contact by id ${req.params.id}`,
  });
});

const createContact = asyncHandler(async(req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    res.status(201).json({
        message: 'contact created',
    });
});

const updateContact=asyncHandler(async(req, res) => {
  res.status(200).json({
    message: `update contact by id ${req.params.id}`,
  });
});

const deleteContact = asyncHandler(async(req, res) => {
  res.status(200).json({
    message: `delete contact by id ${req.params.id}`,
  });
});



module.exports = { 
    getContacts,
    getContact, 
    createContact,
    updateContact,
    deleteContact
};