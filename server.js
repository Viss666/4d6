//npm init
//npm install express

const express = require("express");
const cors = require("cors");
const model = require("./model");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("public"));

app.listen(8080, () => {
  console.log("server is running..");
});

app.get("/player_chars", (request, response) => {
  model.Player.find().then((Players) => {
    console.log("All players: ", Players);
    response.json(Players);
  });
});

app.post("/player_chars", async (request, response) => {
  const data = request.body;
  try {
    let new_player_char = new model.Player({
      name: data.name,
      class: {
        class: data.class,
        subclass: data.subclass,
        hitdice: data.hitdice,
      },
      background: data.background,
      level: data.level,
      prof_bonus: data.prof_bonus,
      description: data.desc,
      hp: data.hp,
      stats: {
        str: {
          score: data.str_score,
          saving_throw: data.str_sv,
          athletics: data.ath_prof,
        },
        dex: {
          score: data.dex_score,
          saving_throw: data.dex_sv,
          acrobatics: data.acr_prof,
          sleight: data.sle_prof,
          stealth: data.stl_prof,
        },
        con: {
          score: data.con_score,
          saving_throw: data.con_sv,
        },
        wis: {
          score: data.wis_score,
          saving_throw: data.wis_sv,
          ani_hand: data.ani_hand_prof,
          ins: data.ins_prof,
          med: data.med_prof,
          perc: data.perc_prof,
          surv: data.surv_prof,
        },
        int: {
          score: data.int_score,
          saving_throw: data.int_sv,
          arc: data.arc_prof,
          hist: data.hist_prof,
          inv: data.inv_prof,
          nat: data.nat_prof,
          rel: data.rel_prof,
        },
        cha: {
          score: data.cha_score,
          saving_throw: data.cha_sv,
          dec: data.dec_prof,
          intim: data.intim_prof,
          perf: data.perf_prof,
          pers: data.pers_prof,
        },
      },
    });
    await new_player_char.save();
    response.status(201).send("created");
  } catch (error) {
    if (error.errors) {
      var errorMessages = {};
      for (var fieldName in error.errors) {
        errorMessages[fieldName] = error.errors[fieldName].message;
      }
      return response.status(422).json(errorMessages);
    } else {
      return response.status(500).send("Server error");
    }
  }
});
