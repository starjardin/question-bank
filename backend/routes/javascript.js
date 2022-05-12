const express = require("express");
const router = express.Router();

const { MongoClient } = require("mongodb");

router.get("/", async (req, res) => {
  const uri = process.env.MONGODB_URI;
  const client = await MongoClient.connect(uri);

  const database = client.db("elite");
  const questions = await database
    .collection("javascript_questions")
    .find({})
    .sort({ metacritic: -1 })
    .toArray();
  res.send(questions);
});

router.post("/create", async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const body = req.body;
  console.log(body);
  const uri = process.env.MONGODB_URI;
  const client = await MongoClient.connect(uri);
  const database = client.db("elite");
  await database.collection("javascript_questions").insertOne(body);
  res.sendStatus(200);
});

router.delete("/delete/:id", async (req, res) => {
  const body = req.params.id;
  console.log(body, "Body");
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const uri = process.env.MONGODB_URI;
    const client = await MongoClient.connect(uri);
    const database = client.db("elite");
    await database
      .collection("javascript_questions")
      .deleteOne({ "_id": `ObjectId(${body.id})` });
    res.sendStatus(200);
    // res.send({ questions });
  } catch (err) {
    res.send({ err: "There was an error while deleting element" });
  }
});

module.exports = router;
