<p align="center">
  <a href="https://www.typisch-touristik.de">
    <img alt="Typisch Touristik" src="https://s3.eu-central-1.amazonaws.com/typischtouristik/logo_typisch-touristik_1200x443.png" width="200">
  </a>
</p>

<p align="center">
  Mixins (horizontal inheritance) for sails models.
</p>

<p align="center">
  <a href="https://travis-ci.org/TypischTouristik/sails-hook-mixins" target="_blank"><img alt="Travis Status" src="https://travis-ci.org/TypischTouristik/sails-hook-mixins.svg"></a>
  <a href="https://david-dm.org/TypischTouristik/sails-hook-mixins" target="_blank"><img alt="Dependency Status" src="https://david-dm.org/TypischTouristik/sails-hook-mixins.svg"></a>
  <a href="https://github.com/TypischTouristik/sails-hook-mixins/releases"><img alt="Version Status" src="https://badge.fury.io/gh/TypischTouristik%2Fsails-hook-mixins.svg"></a>
</p>

---

## Getting started

* Add a folder `api/mixins/` to your project
* Add you first mixin, for example `api/mixins/hasCoordinates.js`
* Define your attributes which are used by multiple models

#### Defining shared attributes

Lets take our example: `api/mixins/hasCoordinates.js`

```js
module.exports = {

  attributes: {
    lat: {
      type: 'float'
    },

    lng: {
      type: 'float'
    }

};
```

#### Use the mixin in the model

For example the an address model `api/models/Address.js` needs the `lat` and `lng` attributes:

```js
module.exports = {

  mixins: [
    'hasCoordinates'
  ],

  attributes: {
    street: {
      type: 'string',
      required: true
    },

    zipcode: {
      type: 'string'
    },

    city: {
      type: 'string'
    }
  }
};
```

and a Point Of Interest model needs the `lat` and `lng` attributes:: `api/models/PointOfInterest.js`

```js
module.exports = {

  mixins: [
    'hasCoordinates'
  ],

  attributes: {
    title: {
      type: 'string',
      required: true
    },

    description: {
      type: 'string'
    }
  }
};
```