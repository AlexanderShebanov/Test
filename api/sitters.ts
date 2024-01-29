import gql from 'graphql-tag';

export const GET_SITTERS = gql`
  query Sitters {
    sitters(
      location: {
        geolocation: {
          distance: 30
          latitude: 33.543682
          longitude: -86.779633
        }
      }
      experience: { maximum: 10, minimum: 1 }
    ) {
      totalCount
      nodes {
        bio
        city
        firstName
        id
        lastInitial
        profilePhotoURL
        rating
        state
        yearsActive
      }
    }
  }
`;
