/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";

import { checkLogin } from "./api/api";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Box,
} from "@chakra-ui/react";
import Layout from "@/components/Layout";
import { maxHeaderSize } from "http";
import axios from "axios";

const EditProfile = () => {
  const [selectedProfilePic, setProfilePic] = useState(null);

  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  axios.get("").then((res) => {
    console.log(res.data);
  });

  const handleSubmit = (event: any) => {
    console.log(`Name: ${name}`);
    console.log(`School: ${school}`);
    console.log(`Location: ${location}`);
    console.log(`Title: ${title}`);

    profile.name = name;
  };
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      checkLogin(localStorage.getItem("jwt"))
        .then((Response) => {
          setProfile({
            ...profile,
            name: Response.data.firstName + " " + Response.data.lastName,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  const [profile, setProfile] = useState({
    name: "John Smith",
    title: "Software Engineer",
    location: "Montreal, QC, CA",
    school: "Concordia University",
    experience: "Five years of experience in full stack development",
    experience2: "Three years of experience in mobile development",
    experience3: "Two years of experience in data analysis",
    image:
      "https://marketplace.canva.com/EAFKZzWYqqE/1/0/1600w/canva-purple-navy-neon-gradient-modern-minimalist-man-tiktok-profile-picture-kqzwo_88iLY.jpg",
    cover:
      "https://img.rawpixel.com/private/static/images/website/2022-05/v904-nunny-016_2.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d04dc64ebef3b6c3ad40a5687bbe31dc",
  });

  const handleProfilePicture = (event: any) => {
    setProfilePic(event.target.files[0]);
  };

  return (
    <>
      <Layout>
        <NavBar />
        <div
          className="profile-picture"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "150px",
            width: "150px",
            margin: "auto",
            position: "relative",
          }}
        >
          {/* profile picture */}
          <img
            alt="image"
            src="https://marketplace.canva.com/EAFKZzWYqqE/1/0/1600w/canva-purple-navy-neon-gradient-modern-minimalist-man-tiktok-profile-picture-kqzwo_88iLY.jpg"
            className="profile-image"
            style={{
              aspectRatio: "1/1",
              objectFit: "cover",
              borderRadius: "100%",
              boxShadow: "0 5px 17px 0px rgba(0, 0, 0, 0.6)",
            }}
          />
          <div
            style={{
              position: "absolute",
              zIndex: -1,
              width: "maxWidth",
              top: "-30%",
            }}
          >
            {/* cover photo */}
            {/* <img
              src="https://timelinecovers.pro/facebook-cover/download/artistic-retro-wave-palm-trees-facebook-cover.jpg"
              alt="Cover"
              style={{
                backgroundColor: "white",
              }}
            /> */}
          </div>
          <button style={{ position: "absolute", bottom: "0", right: "0" }}>
            {/* upload new profile picture button */}
            <input
              type="file"
              id="file-input"
              style={{ display: "none" }}
              onChange={handleProfilePicture}
            />
            <label htmlFor="file-input">
              <img
                src="https://img.icons8.com/material-sharp/512/send-letter.png"
                alt="Upload Icon"
                style={{
                  height: "35px",
                  width: "35px",
                  borderRadius: "100%",
                  backgroundColor: "white",
                }}
              />
            </label>
          </button>
        </div>

        <Stack
          as="form"
          onSubmit={handleSubmit}
          justifyContent="center"
          alignItems="center"
          p={5}
          textAlign="center"
        >
          <Box
            minWidth={"50vw"}
            borderWidth="1px"
            rounded="lg"
            p={5}
            width="auto"
          >
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                minWidth={"100%"}
                type="text"
                id="name"
                placeholder={profile.name}
                value={name}
                onChange={(event) => setName(event.target.value)}
                borderRadius="sm"
                size="lg"
                mb={5}
                width="auto"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="school">School</FormLabel>
              <Input
                minWidth={"100%"}
                type="text"
                placeholder={profile.school}
                id="school"
                value={school}
                onChange={(event) => setSchool(event.target.value)}
                borderRadius="sm"
                size="lg"
                mb={5}
                width="auto"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="location">Title</FormLabel>
              <Input
                minWidth={"100%"}
                type="text"
                placeholder={profile.title}
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                borderRadius="sm"
                size="lg"
                mb={5}
                width="auto"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="location">Location</FormLabel>
              <Input
                minWidth={"100%"}
                type="text"
                placeholder={profile.location}
                id="location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                borderRadius="sm"
                size="lg"
                mb={5}
                width="auto"
              />
            </FormControl>
            <Button
              style={{
                boxShadow: "0 5px 17px 0px rgba(0, 100, 500, 0.3)",
                border: "3px solid rgba(255, 255, 255, 0.3)",
              }}
              type="submit"
              size="lg"
              colorScheme={"blue"}
              borderRadius="100px"
            >
              Update
            </Button>
          </Box>
        </Stack>
      </Layout>
    </>
  );
};

export default EditProfile;