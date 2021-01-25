import React, { Component } from "react";
import SectionLayout from "../../components/section-layout";
import ApiService from "../../services/api-service";

const apiService = new ApiService();

class AboutZooPage extends Component {
  state = {
    city : 'Moscow',
    temp: '',
    clouds: '',
    wind: '',
    weather: [],
  };

  async componentDidMount() {
    const result = await apiService.getWeather(this.state.city);

    this.setState({
      temp: result.main.temp,
      clouds: result.clouds.all,
      wind: result.wind.speed,
      weather: result.weather,
    });
  };

  render() {
    const { temp, clouds, wind, weather } = this.state;
    const elementsOfWeather = weather.map(item => {
      const { id } = item;
  
      return (
        <div key={id}>{item.description}</div>
      );
    });

    return (
      <div className="about">
        <SectionLayout className="home__section">
          <h1 className="about__title">Weather in super zoo is now</h1>
          {elementsOfWeather}
          <div>temperature: {temp}℃</div>
          <div>clouds: {clouds}%</div>
          <div>wind: {wind} m/s </div>
          
        </SectionLayout>
      </div>
    );
  }
}

export default AboutZooPage;
