import React, { Component } from "react";
import SectionLayout from "../../components/section-layout";
import ApiService from "../../services/api-service";

const apiService = new ApiService();

class AboutZooPage extends Component {
  state = {
    city : 'Moscow',
    temp: '',
    clouds: '',
    wind: ''
  };

  async componentDidMount() {
    const result = await apiService.getWeather(this.state.city);

    this.setState({
      temp: result.main.temp,
      clouds: result.clouds.all,
      wind: result.wind.speed,
    });
  };

  render() {
    const { temp, clouds, wind } = this.state;
    return (
      <div className="about">
        <SectionLayout className="home__section">
          <h1 className="about__title">Weather in super zoo is now</h1>
          <div>temperature: {temp}℃</div>
          <div>clouds: {clouds}%</div>
          <div>wind: {wind} m/s </div>
        </SectionLayout>
      </div>
    );
  }
}

export default AboutZooPage;
