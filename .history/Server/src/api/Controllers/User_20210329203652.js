import { JOI_OPTION } from "../../../config";

export const getUser = async (req, res) => {
  res.send("working");
};

export const creatUser = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
};
