const express = require("express");
const moment = require("moment");

const app = express();

app.get("/times", (req, res) => {
  const { lang } = req.query;

  if (!lang || typeof lang !== "string") {
    return res.status(400).json({
      message: "Parameter id negara di butuhkan!",
    });
  }
  moment.locale(lang);
  const momentJs = (params) => {
    return moment().format(params);
  };

  const payload = {
    message: "data berhasil diambil dari server",
    data: {
      locale: lang,
      LT: momentJs("LT"),
      LTS: momentJs("LTS"),
      l: momentJs("l"),
      LL: momentJs("LL"),
      ll: momentJs("ll"),
    },
  };
  res.json(payload);
});

app.listen("2020", () => {
  console.log("server running");
});
