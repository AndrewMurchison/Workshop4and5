

var initialData = {
  "ticketInfo": {
    "1234": {
      "_id": 1,
      "num": "1234-3",
      "amtdue": "7.50"
    },

    "1237": {
      "_id": 2,
      "num": "1237-3",
      "amtdue": "12.50"
    },

    "1936": {
      "_id": 3,
      "num": "1936-3",
      "amtdue": "20.00"
    },

    "1896": {
      "_id": 4,
      "num": "1896-3",
      "amtdue": "15.50"
    },

    "1235": {
      "_id": 5,
      "num": "1235-3",
      "amtdue": "8.50"
    }
  }
};

var data = JSON.parse(localStorage.getItem('facebook_data'));
if (data === null) {
  data = JSONClone(initialData);
}


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
