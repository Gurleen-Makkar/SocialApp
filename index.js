const express = require("express");
const format = require("date-format")

const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("<h1> My name is Gurleen </h1>");
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "gurleen_kaur",
    followers: 400,
    follows: 500,
    date: format.asString("dd[MM] - hh:mm:ss",new Date()),
  };
  res.status(200).json({ instaSocial });
});

app.get("/api/v1/facebook", (req, res) => {
  const facebookSocial = {
    username: "gurleen_kaur_makkar",
    followers: 400,
    follows: 500,
    date: format.asString("dd[MM] - hh:mm:ss",new Date()),
  };
  res.status(200).json({ facebookSocial });
});

app.get("/api/v1/linkedin", (req, res) => {
  const linkedinSocial = {
    username: "gurleen_kaur_makkar",
    followers: 400,
    follows: 500,
    date: format.asString("dd[MM] - hh:mm:ss",new Date()),
  };
  res.status(200).json({ linkedinSocial });
});

app.get("/api/v1/:token", (req,res) => {
  console.log(req.params.token);
  res.status(200).json({param : req.params.token})
})

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
