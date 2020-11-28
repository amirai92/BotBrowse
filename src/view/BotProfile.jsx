import React from "react";
import styled from "styled-components";

const Profile = ({ first_name, country, description, avatar, id, email }) => {
  // console.log(first_name, country, description, avatar);
  // avatar = avatar.replace("100x100", "300x300");
  return (
    <ProfileBox>
      {avatar ? (
        <Avatar src={avatar.replace("100x100", "300x300")} alt="profile pic" />
      ) : (
        <></>
      )}
      <Title>
        {first_name} from {country}
      </Title>
      <Divider />
      <Sub>id: {id}</Sub>
      <Sub>country: {country}</Sub>
      <Sub>email: {email}</Sub>
      <Paragraph>{description}</Paragraph>
    </ProfileBox>
  );
};
export default Profile;

const ProfileBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem;
  justify-content: center;
  align-content: flex-start;
`;

const Avatar = styled.img`
  /* flex-basis: 100%; */
  height: 30rem;
  width: 30rem;
  /* border: #004141 solid 4px; */
  border-radius: 50%;
  /* padding: 10px; */
  background-color: peachpuff;
  /* transition: box-shadow 150ms, margin 150ms, padding 150ms; */
`;

const Divider = styled.hr`
  flex-basis: 100%;
  border: 0;
  height: 1px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(25, 25, 112, 0.75),
    rgba(0, 0, 0, 0)
  );
`;

const Title = styled.h1`
  flex-basis: 100%;
  margin-top: 1rem;
  text-align: center;
  font-size: 3.8rem;
  color: slategray;
  font-family: "Expletus Sans";
  font-weight: 200;
  font-size: 3.6rem;
`;

const Sub = styled.h2`
  font-family: "Expletus Sans";
  flex-basis: 100%;
  font-weight: 200;
  font-size: 2.2rem;
  color: midnightblue;
  text-align: left;
`;

const Paragraph = styled.p`
  margin-top: 2rem;
  font-family: "Expletus Sans";
  font-weight: 200;
  font-size: 1.9rem;
  color: lightslategray;
`;
