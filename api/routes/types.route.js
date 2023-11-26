const express = require("express");
const axiosAPI = require("../axios.config");
const Type = require("../models/Type");
const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const apiTypes = await axiosAPI("/type");
    const types = apiTypes.data.results.map((t) => t.name);

    await Promise.all(
      types.map(async (type) => {
        await Type.findOrCreate({
          where: {
            name: type,
          },
        });
      })
    );

    const typesDB = await Type.findAll();

    res.json(typesDB);
  } catch (error) {
    console.error("Error handling types:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
