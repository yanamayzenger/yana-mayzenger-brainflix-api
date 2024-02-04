const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "..", "data", "videos.json");

const readVideoData = () => {
  const videoDataRaw = fs.readFileSync(dataFilePath);
  return JSON.parse(videoDataRaw);
};

router.get("/", (req, res) => {
  try {
    const videoData = readVideoData();
    res.status(200).json(
      videoData.map(({ id, title, channel, image }) => ({
        id,
        title,
        channel,
        image,
      }))
    );
  } catch (error) {
    console.error("Failed to read videos data: ", error);
    res.sendStatus(500);
  }
});

router.get("/:id", (req, res) => {
  try {
    const videoData = readVideoData();
    const video = videoData.find((video) => video.id === req.params.id);
    if (video) {
      res.status(200).json(video);
    } else {
      res.status(404).send("Video not found");
    }
  } catch (error) {
    console.error("Error fetching video details: ", error);
    res.sendStatus(500);
  }
});

router.post("/", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).send("Title and description are required.");
  }

  const videoData = readVideoData();
  const newVideo = {
    id: uuidv4(),
    title,
    channel: "Channel 1",
    description,
    views: "11111",
    likes: "22222",
    duration: "3:33",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    image: "http://localhost:8080/images/image0.jpeg",
    comments: [],
  };

  videoData.push(newVideo);
  fs.writeFileSync(dataFilePath, JSON.stringify(videoData, null, 2), "utf8");
  res.status(201).send("Your video has been successfully uploaded!");
});

module.exports = router;
