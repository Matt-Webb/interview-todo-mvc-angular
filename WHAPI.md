# WH API
Retrieves a complete list of all events that have inplay betting available and have not yet started. The header response contains the Cache Control and Expires headers, which inform the remote client how long it should retain and redisplay the response before sending a request to the server for and updated response. The Cache control time for this request is 30 seconds.
### How to use
URL:
http://sandbox.whapi.com/v1/competitions/events/inplay/upcoming

```
   GET /v1/competitions/events/inplay/upcoming HTTP/1.1
   Host: sandbox.whapi.com
   Accept: application/vnd.who.Sportsbook+xml;v=1;charset=utf-8
   who-apiKey: l7xx35af30972d934b198debb42dd064c81f
```

Example of a response

```

   {
      "whoCompetitions": {
         "created": "2014-09-15 08:19:23",
         "disclaimer": "WHG (International) Ltd (\"We/Us\") of 6/1 Waterport Place, Gibraltar owns the Website (the \"Website\") relating to information contained on its main trading website. By using this service you agree to these full Terms of Use available at http://developer.wiliamhilll.com/",
         "copyright": "Copyright (c)2014, WHG (International) Limited. All rights reserved",
         "category": [
            {
               "id": "1",
               "name": "American Football"
            },
            {
               "id": "2",
               "name": "Baseball"
            },
            {
               "id": "3",
               "name": "Basketball",
               "class": {
                  "id": "273",
                  "name": "European Basketball",
                  "type": [
                     {
                        "id": "8215",
                        "name": "Spanish Liga Femenina"
                     },
                     {
                        "id": "15460",
                        "name": "Qatar Cup",
                        "event": {
                           "id": "7474630",
                           "name": "Al Gharafa v Al Jaish",
                           "status": "S",
                           "date": "2015-04-14",
                           "time": "15:00:00",
                           "availability": { "inPlay": "Y" },
                           "inPlay": { "started": "N" }
                        }
                     }
                  ]
               }
            }
         ]
      }
   }
```

