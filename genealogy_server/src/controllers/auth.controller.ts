import { getReasonPhrase, ReasonPhrases, StatusCodes } from "http-status-codes";

const authController = {
  register: (req: any, res: any) => {
    return res.status(StatusCodes.CONFLICT).send("register");
  },

  login: (req: any, res: any) => {
    res.send("login");
  },

  logout: (req: any, res: any) => {
    res.send("logout");
  },

  getMe: (req: any, res: any) => {
    res.send("getMe");
  },

  getUser: (req: any, res: any) => {
    res.send("getUser");
  },
};

export default authController;
