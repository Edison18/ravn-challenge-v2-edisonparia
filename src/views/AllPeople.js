import React from "react";
import { useQuery } from "@apollo/client";

//GraphQL queries

import { ALL_PEOPLE } from "../graphQL/Queries";

//Components
import { Loading } from "../components/Loading";
import { ErrorMessage } from "../components/ErrorMessage";
import { PersonCell } from "../components/PersonCell";

export const AllPeople = ({ setSelectedPerson, setSelectedName }) => {
  const { loading, error, data, fetchMore } = useQuery(ALL_PEOPLE, {
    variables: { first: 5, after: null },
  });

  const getProfile = (id, name) => {
    setSelectedPerson({
      id,
      name,
    });
    // setSelectedName(name);
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  return (
    <>
      {data.allPeople.edges.map(({ node }) => (
        <div
          className="pointer"
          key={node.id}
          onClick={() => getProfile(node.id, node.name)}
        >
          <PersonCell data={node} />
        </div>
      ))}
      <div
        className="pointer"
        onClick={() => {
          const endCursor = data.allPeople.pageInfo.endCursor;
          fetchMore({
            variables: { after: endCursor },
            updateQuery: (prevResult, { fetchMoreResult }) => {
              fetchMoreResult.allPeople.edges = [
                ...prevResult.allPeople.edges,
                ...fetchMoreResult.allPeople.edges,
              ];
              return fetchMoreResult;
            },
          });
        }}
      >
        <Loading />
      </div>
    </>
  );
};
