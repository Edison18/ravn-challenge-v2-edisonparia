import { gql } from "@apollo/client";

export const ALL_PEOPLE = gql`
  query allPeople($first: Int, $after: String) {
    allPeople(after: $after, first: $first) {
      edges {
        cursor
        node {
          name
          id
          species {
            name
          }
          homeworld {
            name
          }
        }
      }
      pageInfo {
        endCursor
      }
    }
  }
`;

export const GET_PERSON = gql`
  query GetPerson($personID: ID!) {
    person(id: $personID) {
      id
      name
      eyeColor
      hairColor
      skinColor
      birthYear
      vehicleConnection {
        vehicles {
          id
          name
        }
      }
    }
  }
`;
