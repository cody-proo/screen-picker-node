const express = require("express");
const puppeteer = require("puppeteer");
const app = express();
app.use(express.json());

app.post("/screenshot", async (req, res, next) => {
  const url = req.body.url;
  console.log(url);
  const browser = await puppeteer.launch({
    defaultViewport: { height: 1200, width: 1200 },
  });
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: "./x.png" });
  await page.close();
  return res.json({ message: "taked" });
});

app.listen(4040, () => {
  console.log("THE SERVER IS RUNNING");
});
