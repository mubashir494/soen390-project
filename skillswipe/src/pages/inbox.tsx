import {
  Flex,
  Heading,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";
import type { NextPage } from "next";
import NavBar from "@/components/NavBar";
import { Box, Text, List, ListItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";

const inbox = () => {
  return (
    <>
      <Layout>
      <NavBar></NavBar>
      <Text>Messages</Text>
      </Layout>
    </>
  );
};

export default inbox;
