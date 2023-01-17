//import axios from "axios";
import { API_HOST_PREFIX, SHEETS_API_HOST_PREFIX } from "./serviceHelpers";

const API = {
   endpoint: `${API_HOST_PREFIX}/api/sharestory`,
   contactEmail: SHEETS_API_HOST_PREFIX,
};
console.log(API);

const sendEmail = (values) => {
   return values;
};

const emailService = {
   sendEmail,
};
export default emailService;
