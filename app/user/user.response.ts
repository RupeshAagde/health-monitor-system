
import { ResponseHandler } from "../utility/response-handler";

export const ERROR_MESSAGES = {
    ALREADY_EXIST: new ResponseHandler(null, 'USER ALREADY EXIST!'),
    INVALID_CREDENTAIL: new ResponseHandler(null, 'INVALID_CREDENTAIL!'),
    INVALID_PASSWORD: new ResponseHandler(null, 'INVALID_PASSWORD!')
}