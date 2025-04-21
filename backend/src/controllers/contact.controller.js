import { Contact } from "../models/contact.model.js";
import asyncHandler from "../utils/asyncHandler.js";

export const contactUs = asyncHandler(async (req, res) => {
  const { name, email, companyName, teamSize, message } = req.body;

  if (!name)
    return res
      .status(400)
      .json({ success: false, message: "Please Enter Name" });
  if (!email)
    return res
      .status(400)
      .json({ success: false, message: "Please Enter Email" });
  if (!companyName)
    return res
      .status(400)
      .json({ success: false, message: "Please Enter Comapny Name" });
  if (!teamSize)
    return res
      .status(400)
      .json({ success: false, message: "Please Enter Team Size" });
  if (!message)
    return res
      .status(400)
      .json({ success: false, message: "Please Enter Message" });

  const contact = new Contact({ name, email, companyName, teamSize, message });
  await contact.save();

  return res
    .status(201)
    .json({ success: true, contact, message: "Form Submitted Succesfully." });
});

export const allContact = asyncHandler(async (req, res) => {
  let { search = "", page = 1, limit = 10 } = req.query;

  page = parseInt(page);
  limit = parseInt(limit);
  if (isNaN(page) || page < 1) page = 1;
  if (isNaN(limit) || limit < 1) limit = 10;

  const filter = {};

  if (search.trim()) {
    filter.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
      { companyName: { $regex: search, $options: "i" } },
    ];
  }

  const totalContacts = await Contact.countDocuments(filter);
  const contacts = await Contact.find(filter)
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip((page - 1) * limit);

  if (!contacts || contacts.length === 0) {
    return res.status(400).json({
      success: false,
      message: "unable to fetch contacts",
    });
  }

  return res.status(200).json({
    success: true,
    message: "contacts fetched succesfully",
    contacts,
    totalContacts,
    page,
    limit,
    totalPages: Math.ceil(totalContacts / limit),
  });
});
