import { Router } from "express";
import controller from '../controllers/controller.js'

const router = Router();

router.get(`/favicon.ico`, controller.getFavicon);
router.get(`/`, controller.getIndex);
router.get(`/company/:company`, controller.getCompany);
router.get(`/admin`, controller.getAdmin);

// router.get(`/getCheckRefNo`, controller.getCheckRefNo);
router.get(`/add`, controller.getAdd);
router.get(`/delete`, controller.getDelete);

export default router;