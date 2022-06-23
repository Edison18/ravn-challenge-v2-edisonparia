import React from "react";
import { useQuery } from "@apollo/client";

import { GET_PERSON } from "../graphQL/Queries";
import { DataCell } from "../components/DataCell";
import { Loading } from "../components/Loading";
import { ErrorMessage } from "../components/ErrorMessage";

export const PersonDetail = ({ selectedPerson }) => {
  const { loading, error, data } = useQuery(GET_PERSON, {
    variables: { personID: selectedPerson.id },
  });
  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  return (
    <>
      {data ? (
        <>
          <div className="text-data-title">General Information</div>
          <DataCell
            key="1"
            info="Eye Color"
            value={data.person.eyeColor}
          ></DataCell>
          <DataCell
            key="2"
            info="Hair Color"
            value={data.person.hairColor}
          ></DataCell>
          <DataCell
            key="3"
            info="Skin Color"
            value={data.person.skinColor}
          ></DataCell>
          <DataCell
            key="4"
            info="birth Year"
            value={data.person.birthYear}
          ></DataCell>

          {data.person.vehicleConnection.vehicles.length > 0 ? (
            <div className="text-data-title">Vehicles</div>
          ) : null}

          {data.person.vehicleConnection.vehicles
            ? data.person.vehicleConnection.vehicles.map(({ id, name }) => {
                return <DataCell key={id} info={name} />;
              })
            : null}
        </>
      ) : null}
    </>
  );
};
