const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://viss_666:4x12ptnCBwiWvqoB@cluster0.ooxemxf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "a name is required"],
  },
  class: {
    class: {
      type: String,
      required: [true],
    },
    subclass: {
      type: String,
    },
    hitdice: {
      type: Number,
    },
  },
  background: {
    type: String,
  },
  level: {
    type: Number,
  },
  prof_bonus: {
    type: Number,
  },
  description: {
    type: String,
  },
  hp: {
    type: Number,
  },
  stats: {
    str: {
      score: {
        type: Number,
      },
      saving_throw: {
        type: Boolean,
      },
      athletics: {
        type: Boolean,
      },
    },
    dex: {
      score: {
        type: Number,
      },
      saving_throw: {
        type: Boolean,
      },
      acrobatics: {
        type: Boolean,
      },
      sleight: {
        type: Boolean,
      },
      stealth: {
        type: Boolean,
      },
    },
    con: {
      score: {
        type: Number,
      },
      saving_throw: {
        type: Boolean,
      },
    },
    wis: {
      score: {
        type: Number,
      },
      saving_throw: {
        type: Boolean,
      },
      ani_hand: {
        type: Boolean,
      },
      ins: {
        type: Boolean,
      },
      med: {
        type: Boolean,
      },
      perc: {
        type: Boolean,
      },
      surv: {
        type: Boolean,
      },
    },
    int: {
      score: {
        type: Number,
      },
      saving_throw: {
        type: Boolean,
      },
      arc: {
        type: Boolean,
      },
      hist: {
        type: Boolean,
      },
      inv: {
        type: Boolean,
      },
      nat: {
        type: Boolean,
      },
      rel: {
        type: Boolean,
      },
    },
    cha: {
      score: {
        type: Number,
      },
      saving_throw: {
        type: Boolean,
      },
      dec: {
        type: Boolean,
      },
      intim: {
        type: Boolean,
      },
      perf: {
        type: Boolean,
      },
      pers: {
        type: Boolean,
      },
    },
  },
});

const Player = new mongoose.model("Player", playerSchema);

module.exports = {
  Player: Player,
};
