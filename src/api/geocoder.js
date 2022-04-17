class MapboxGeocoder {
  #baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

  #apiKey;

  constructor(apiKey) {
    this.#apiKey = apiKey;
  }

  async getAddressFromCoords(lat, lng) {
    const url = `${this.#baseUrl}/${lng},${lat}.json?access_token=${
      this.#apiKey
    }`;

    const response = await fetch(url);

    const data = await response.json();

    const address = data.features[0].place_name;

    return address;
  }
}

export { MapboxGeocoder };
