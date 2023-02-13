import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../lib/sanity.client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.message) {
      if (data.wantedResponse === "email" && data.email === "") {
        return res
          .status(400)
          .json({ message: "Invalid input data", success: false });
      }
      if (
        (data.wantedResponse === "phone" ||
          data.wantedResponse === "whatsup") &&
        data.phoneNumber === ""
      ) {
        return res
          .status(400)
          .json({ message: "Invalid input data", success: false });
      }
    }
    try {
      await client.create({
        _type: "contactMessage",
        name: data.name,
        wantedResponse: data.wantedResponse,
        email: data.email,
        phoneNumber: data.phoneNumber,
        message: data.message,
      });
      res
        .status(201)
        .json({ success: true, message: "Success sending message!" });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
  if (req.method !== "POST") {
    res.status(400).json({ success: false, message: "Bad Request" });
  }
};

export default handler;
