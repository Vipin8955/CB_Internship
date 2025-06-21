db.createCollection('actors');
db.actors.insertMany([
    {name:'Sheldon Cooper'},
    {name:'Penny'}
])

db.createCollection('movies');
db.movies.insertMany([
    {name:'The Big Bang Theory'},
    {name:'Young Sheldon'}
])



actorId:ObjectId('685721c279e2af83e26c4bd0'),ObjectId('685721c279e2af83e26c4bd1')
movieId:ObjectId('685721c679e2af83e26c4bd2'),ObjectId('685721c679e2af83e26c4bd3')

db.actors_movies.insertMany([
    {
        actorId:ObjectId('685721c279e2af83e26c4bd0'),
        movieId:ObjectId('685721c679e2af83e26c4bd2')
    },
    {
        actorId:ObjectId('685721c279e2af83e26c4bd0'),
        movieId:ObjectId('685721c679e2af83e26c4bd3')
    },
    {
        actorId:ObjectId('685721c279e2af83e26c4bd1'),
        movieId:ObjectId('685721c679e2af83e26c4bd2')
    }
])


db.actors_movies.aggregate([
    {
        $lookup:{
            from:'actors',
            localField:'actorId',
            foreignField:'_id',
            as:'ActorsInfo'
        }
    },
    {
        $lookup:{
            from:'movies',
            localField:'movieId',
            foreignField:'_id',
            as:'MoviesInfo'
        }
    }
])