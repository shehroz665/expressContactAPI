

const getContacts=(req, res) => {
  res.status(200).json({
    message: 'get all contacts',
  });
};

const getContact = (req, res) => {
  res.status(200).json({
    message: `get contact by id ${req.params.id}`,
  });
};

const createContact =(req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    res.status(201).json({
        message: 'contact created',
    });
};

const updateContact=(req, res) => {
  res.status(200).json({
    message: `update contact by id ${req.params.id}`,
  });
};

const deleteContact = (req, res) => {
  res.status(200).json({
    message: `delete contact by id ${req.params.id}`,
  });
};



module.exports = { 
    getContacts,
    getContact, 
    createContact,
    updateContact,
    deleteContact
};