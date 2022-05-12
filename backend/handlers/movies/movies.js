const movies = async (req, res) => {
  const client = await MongoClient.connect(
    "mongodb+srv://Tantely:QraeYdSp35HaVGY@mongodb-playground.32w54.mongodb.net/elite?retryWrites=true&w=majority"
  );

  const database = client.db("sample_mflix");
  const movies = await database
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(4)
    .toArray();
  res.send(movies);
};

module.exports = {
  movies,
};

