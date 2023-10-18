db.movies.insertMany([{
    "_id": "1",
    "title": "Movie 1",
    "releaseYear": "2020",
    "genre": "commedy",
    "director": ["D1"],
    "actors": ["A1","A2"]
  },{
    "_id": "2",
    "title": "Movie 2",
    "releaseYear": "2021",
    "genre": "commedy",
    "director": [
      "D2"
    ],
    "actors": [
      "A1",
      "A3"
    ]
  },{
    "_id": "3",
    "title": "Movie 3",
    "releaseYear": "2023",
    "genre": "action",
    "director": [
      "D1",
      "D3"
    ],
    "actors": [
      "A1",
      "A2"
    ]
  },{
    "_id": "4",
    "title": "Movie 4",
    "releaseYear": "2024",
    "genre": "commedy",
    "director": "D4",
    "actors": [
      "A1",
      "A2",
      "A4"
    ]
  },{
    "_id": "5",
    "title": "Movie 5",
    "releaseYear": "2022",
    "genre": "action",
    "director": "D1",
    "actors": [
      "A1",
      "A2"
    ]
  },
  {
    "_id": "6",
    "title": "Movie 6",
    "releaseYear": "2025",
    "genre": "sci-fi",
    "director": "D1",
    "actors": [
      "A1",
      "A2"
    ]
  },{
    "_id": "7",
    "title": "Movie 7",
    "releaseYear": "2026",
    "genre": "commedy",
    "director": "D1",
    "actors": [
      "A1",
      "A2"
    ]
  },{
    "_id": "8",
    "title": "Movie 8",
    "releaseYear": "2020",
    "genre": "commedy",
    "director": "D1",
    "actors": [
      "A1",
      "A2"
    ]
  },{
    "_id": "9",
    "title": "Movie 9",
    "releaseYear": "2021",
    "genre": "action",
    "director": "D1",
    "actors": [
      "A1",
      "A2"
    ]
  },{
    "_id": "10",
    "title": "Movie 10",
    "releaseYear": "2022",
    "genre": "sci-fi",
    "director": "D1",
    "actors": [
      "A1",
      "A3"
    ]
  }
])

db.directors.insertMany([
    {
        "_id": "1",
        "name": "D1",
        "nationality": "Indian",
        "moviesDirected": [
          1,
          2
        ]
      },
      {
        "_id": "2",
        "name": "D2",
        "nationality": "Amarican",
        "moviesDirected": [
          3,
          4
        ]
      },
      {
        "_id": "3",
        "name": "D3",
        "nationality": "Spanish",
        "moviesDirected": [
          5,
          6
        ]
      },
      {
        "_id": "4",
        "name": "D4",
        "nationality": "Canadian",
        "moviesDirected": [
          7,
          8
        ]
      },
      {
        "_id": "5",
        "name": "D5",
        "nationality": "Japanese",
        "moviesDirected": [
          9,
          10
        ]
      }
])

db.actors.insertMany([
    {
        "_id": "1",
        "name": "A1",
        "nationality": "Indian",
        "moviesActedIn": [
          1,
          2
        ]
      },
      {
        "_id": "2",
        "name": "A2",
        "nationality": "Amarican",
        "moviesActedIn": [
          3,
          4
        ]
      },
      {
        "_id": "3",
        "name": "A3",
        "nationality": "Spanish",
        "moviesActedIn": [
          5,
          6
        ]
      },
      {
        "_id": "4",
        "name": "A4",
        "nationality": "Canadian",
        "moviesActedIn": [
          7,
          8
        ]
      },
      {
        "_id": "5",
        "name": "A5",
        "nationality": "Japanese",
        "moviesActedIn": [
          9,
          10
        ]
      },
      {
        "_id": "6",
        "name": "A6",
        "nationality": "Japanese",
        "moviesActedIn": [
          2,
          5
        ]
      },
      {
        "_id": "7",
        "name": "A7",
        "nationality": "Japanese",
        "moviesActedIn": [
          4,
          8
        ]
      },
      {
        "_id": "8",
        "name": "A8",
        "nationality": "Japanese",
        "moviesActedIn": [
          1,
          4
        ]
      }
])