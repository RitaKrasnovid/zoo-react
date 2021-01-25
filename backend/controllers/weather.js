const request = require("request");
const keys = require("../config/keys");

const getByCity = (req, res) => {
  const cityName = req.params.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${keys.API_KEY}`;

  request({ method: "GET",uri: url },
    (error, response, body) => {
      if (error) {
        return;
      }

      if(response.statusCode === 200) {
        const data = JSON.parse(body);

        res.send(data);
      }
    }
  );
};


module.exports = {
  getByCity,
};
