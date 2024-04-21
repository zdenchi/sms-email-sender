require("dotenv").config();

const express = require("express");
const { Worker, Queue } = require("bullmq");
const sendEmail = require("../senders/sendEmail");
const sendSms = require("../senders/sendSms");
const Redis = require("ioredis");

const app = express();
app.use(express.json());

const connection = new Redis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null,
});

const senderQueue = new Queue("senderQueue", {
  connection,
  defaultJobOptions: {
    attempts: 2,
    backoff: {
      type: "exponential",
      delay: 5000,
    },
  },
});

const worker = new Worker(
  "senderQueue",
  async (job) => {
    if (job.name === "email") {
      await sendEmail(job.data);
    } else {
      await sendSms(job.data);
    }
    console.log("Task executed successfully");
  },
  {
    connection,
    concurrency: 5,
    removeOnComplete: { count: 1000 },
    removeOnFail: { count: 5000 },
  }
);

app.post("/send", async (req, res) => {
  const { type, data } = req.body;

  if (!type || !data) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  await senderQueue.add(type, data);

  res.json({ message: "Task added to the queue" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});