

var initialData = {
  "ticketInfo": {
    "1": {
      "_id": 1,
      "num": "1234-3",
      "amtdue": 7.50,
      "validationarr": [
        1,3
      ]
    },

    "2": {
      "_id": 2,
      "num": "1237-3",
      "amtdue": 12.50,
      "validationarr": [
        1,4
      ]
    },

    "3": {
      "_id": 3,
      "num": "1936-3",
      "amtdue": 20.00,
      "validationarr": [
        2
      ]
    },

    "4": {
      "_id": 4,
      "num": "1896-3",
      "amtdue": 15.50,
      "validationarr": [
        5
      ]
    },

    "5": {
      "_id": 5,
      "num": "1235-3",
      "amtdue": 8.50,
      "validationarr": [

      ]
    }
  },

  "validations": {
    "1": {
      "_id": 1,
      "amt": 3.00,
      "name": "HP"
    },

    "2": {
      "_id": 2,
      "amt": 6.00,
      "name": "SN"
    },

    "3": {
      "_id": 3,
      "amt": 4.00,
      "name": "HC"
    },

    "4": {
      "_id": 4,
      "amt": 7.00,
      "name": "BD"
    },

    "5": {
      "_id": 5,
      "amt": 8.00,
      "name": "dead"
    }
  }
};

var data = JSON.parse(localStorage.getItem('facebook_data'));
if (data === null) {
  data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
export function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  return JSONClone(data[collection][id]);
}
