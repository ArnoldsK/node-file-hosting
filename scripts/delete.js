const axios = require("axios")

// Send the request
;(async () => {
  try {
    const res = await axios.delete("http://localhost:3000/f/joy.png", {
      headers: {
        Authorization: "flapjack LOCAL-TEST-AUTH-KEY",
      },
    })

    console.log("RESPONSE", res.data)
  } catch (err) {
    console.error("ERROR", err)
  }
})()
