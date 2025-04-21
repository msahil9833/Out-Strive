import { Router } from "express";
import { allContact, contactUs } from "../controllers/contact.controller.js";

const router = Router();

router.route("/contact-us").post(contactUs);
router.route("/all").get(allContact);

export default router;
