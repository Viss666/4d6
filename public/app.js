Vue.createApp({
  data() {
    return {
      players: [],
      displayClass: [],
      classInput: "",
      classes: [
        "Barbarian",
        "Bard",
        "Cleric",
        "Druid",
        "Fighter",
        "Monk",
        "Paladin",
        "Ranger",
        "Rogue",
        "Sorcerer",
        "Warlock",
        "Wizard",
      ],
      makeChar: [],
      newName: "",
      newClass: "",
    };
  },
  methods: {
    getPlayers: function () {
      fetch("/player_chars").then((response) => {
        if (response.status == 200) {
          response.json().then((playersFromServer) => {
            console.log("Receieved players from server:", playersFromServer);
            // for (player in playersFromServer) {
            //   this.players.push(player);
            // }
            this.players = playersFromServer;
          });
        }
      });
    },
    getClass: async function (clas) {
      const myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      console.log("hello");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      let response = await fetch(
        "https://www.dnd5eapi.co/api/classes/" + clas.toLowerCase(),
        requestOptions
      );
      let data = await response.json();
      console.log(data);
      this.displayClass = data;

      // fetch("https://www.dnd5eapi.co/api/classes/fighter", requestOptions).then(
      //   (response) => {
      //     console.log(response);
      //     response.json().then((class) => {
      //       console.log("received class from api:", class);
      //     })
      //     // this.displayClass = response;
      //   }
      // );
      //   fetch("https://www.dnd5eapi.co/api/classes/fighter", requestOptions)
      //     .then((response) => response.text())
      //     .then((result) => console.log(result))
      //     .catch((error) => console.error(error));
    },
  },
  created: function () {
    this.getPlayers();
    // this.getClass();
  },
}).mount("#app");
