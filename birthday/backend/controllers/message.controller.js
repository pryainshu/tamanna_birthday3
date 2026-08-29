const Message = require("../models/message");

const createMessage = async (req, res) => {

  try {

    const { name, message } = req.body;

    if (!name || !message) {
      return res.status(400).json({
        message: "Name and message are required",
      });
    }

    const newMessage = await Message.create({
      name,
      message,
    });

    res.status(201).json({
      message: "Message saved successfully ❤️",
      data: newMessage,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Unable to save message",
    });
  }
};

const getMessages = async (req, res) => {

  try {

    const messages = await Message.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      messages,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Unable to fetch messages",
    });
  }
};

module.exports = {
  createMessage,
  getMessages,
};