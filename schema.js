var db = require('./models');

import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
  GraphQLSchema
} from 'graphql';

const Athlete = new GraphQLObjectType({
  name: 'Athlete',
  description: "This represents an athlete",
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(athlete) {
          return athlete.id;
        }
      },
      name: {
        type: GraphQLString,
        resolve(athlete) {
          return athlete.name;
        }
      },
      sex: {
        type: GraphQLString,
        resolve(athlete) {
          return athlete.sex;
        }
      },
      age: {
        type: GraphQLInt,
        resolve(athlete) {
          return athlete.age;
        }
      },
      height: {
        type: GraphQLFloat,
        resolve(athlete) {
          return athlete.height;
        }
      },
      weight: {
        type: GraphQLFloat,
        resolve(athlete) {
          return athlete.weight;
        }
      },
      team: {
        type: GraphQLString,
        resolve(athlete) {
          return athlete.team;
        }
      },
      NOC: {
        type: GraphQLString,
        resolve(athlete) {
          return athlete.noc;
        }
      },
      games: {
        type: GraphQLString,
        resolve(athlete) {
          return athlete.games;
        }
      },
      year: {
        type: GraphQLInt,
        resolve(athlete) {
          return athlete.year;
        }
      },
      season: {
        type: GraphQLString,
        resolve(athlete) {
          return athlete.season;
        }
      },
      city: {
        type: GraphQLString,
        resolve(athlete) {
          return athlete.city;
        }
      },
      sport: {
        type: GraphQLString,
        resolve(athlete) {
          return athlete.sport;
        }
      },
      event: {
        type: GraphQLString,
        resolve(athlete) {
          return athlete.event;
        }
      },
      medal: {
        type: GraphQLString,
        resolve(athlete) {
          return athlete.medal;
        }
      }
    }
  }
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => {
    return {
      athletes: {
        type: GraphQLList(Athlete),
        args: {
          id: {
            type: GraphQLInt
          },
          name: {
            type: GraphQLString
          },
          sport: {
            type: GraphQLString
          }
        },
        resolve(root, args) {
          return db.athlete.findAll({where: args});
        }
      }
    }
  }
})

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;