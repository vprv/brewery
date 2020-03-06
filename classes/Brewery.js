class Brewery {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.type = obj.brewery_type;
    this.street = obj.street;
    this.city = obj.city;
    this.state = obj.state;
    this.postal_code = obj.postal_code;
    this.country = obj.country;
    this.longitude = obj.longitude;
    this.phone = obj.phone;
    this.website_url = obj.website_url;
    this.updated_at = obj.updated_at;
    this.tag_list = obj.tag_list;
  }

  getFullAddress() {
    const list = [
      this.postal_code,
      this.country,
      this.state,
      this.city,
      this.street
    ];
    return list.join(',');
  }
}

module.exports = Brewery;
