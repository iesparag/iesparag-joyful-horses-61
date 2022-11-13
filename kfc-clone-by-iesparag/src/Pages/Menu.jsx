import {
  Flex,
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Center,
  Stack,
  Hide,
  Input,
  Button
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import VerticalLine from "../Components/VerticalLine";
import BeveragesAndDesserts from "../menu/BeveragesAndDesserts";
import BiryaniBuckets from "../menu/BiryaniBuckets";
import BoxMeals from "../menu/BoxMeals";
import Burgers from "../menu/Burgers";
import ChickenBucket from "../menu/ChickenBucket";
import HotDeals from "../menu/HotDeals";
import HotLaunches from "../menu/HotLaunches";
import Snack from "../menu/Snack";

// const getData = () => {
//   return fetch(`http://localhost:3005/products`).then((res)=> res.json())
// }

const Menu = () => {
  // const [item,getItem] = useState([])
  // const [isLoading,setIsLoading] = useState(false)
  // const [inp,setInp] = useState("")
  // const [searchdata,setSearchData] = useState([])

  // useEffect(()=>{
  //   getdatafromback()
  // },[])

  // // console.log(item);

  // const getdatafromback = () => {
  //   setIsLoading(true)
  //    getData().then((res)=>{
  //     getItem(res)
  //    }).catch((err)=>{
  //     console.log(err);
  //    }).finally(()=>{
  //     setIsLoading(false)
  //    })
  // } 

  // {
  //   const lg_gye = getItem.filter((el)=> ((el.name).toLowerCase()).includes(inp.toLowerCase()) )
  //      setSearchData(lg_gye)
  // }
  
  // handleSearch()
//   const handleSearch = ()=> {
       

//   }
// console.log(inp)
//   console.log(searchdata)


  return (
    <Box >
      <Grid
        gridTemplateColumns={{lg:"1fr 4fr"}}
        justifyContent="center"
        margin="auto"
       
      >
        <Box 
        // bg="yellow"
        // position="sticky"
        // top="0"
        >
         
            
            <Flex
              position={{base:"fixed",md:"fixed",lg:"sticky"}}
              top={{base:"100px",md:"100px",lg:"50px",xl:"50px"}}
              left="0"
              p="50px"
              // m="auto"
              bg="white"
              gap="20px"
              // h={{base:"0px"}}
              // mt={{md:"0px"}}
              justifyContent="center"
              alignItems="start"
              flexDir={{ lg: "column", sm: "row", md: "row" }}
              // flexDirection="column"
              // h={{ sm: "10vh", lg: "70vh", md: "70vh" }}
             flexWrap="wrap"
             margin="auto"
             width={{base:"100%",md:"100%"}}
              
            >
              <Hide below="md">
              <Box >
              
                <VerticalLine />
                <Heading mb="10px" size="lg">KFC MENU</Heading>
              
              </Box>
            </Hide>
            <a href="#hotDeals">Hot Deals</a>
              {/* <NavLink to="#hotDeals">Hot Deals</NavLink> */}
            <a  href="#chickenBucket">Chicken Buckets</a>
             
              {/* <NavLink to="#chickenBucket">Chicken Buckets</NavLink> */}
            <a href="#hotLaunches">Hot Launches</a>
             
              {/* <NavLink to="#">Hot Launches</NavLink> */}
            <a href="#boxMeals">Box Meals</a>
              
              {/* <NavLink to="#">Box Meals</NavLink> */}
            <a href="#burgers">Burgers</a>

            <a href="#biryaniBuckets">Biryani Buckets</a>


              {/* <NavLink to="#">Burgers</NavLink> */}
            <a href="#snack">Snack</a>


              {/* <NavLink to="#">Snack</NavLink> */}
              
            <a href="#beveragesAndDesserts">Beverages And Desserts</a>
              {/* <NavLink to="#">Desserts</NavLink> */}
              
            </Flex>
          {/* </Box> */}
        </Box>

        {/* right Box */}
        <Grid m={{base:"210px auto",lg:"auto",xl:"auto"}}  boxShadow="base"  >

          {/* search box */}
             {/* <Box alignItems="center"><Input value={inp} onChange={(e)=> setInp(e.target.value)} focusBorderColor="#e4002b" m="20px 0px 20px 50px " w="30%" placeholder="search Here" /><Button bg="#e4002b"  color="white" onClick={handleSearch}>Search</Button></Box> */}
            
             <Box   id="hotDeals" >
                <Heading  m="50px 50px"   as="h1" size="lg">HOT DEALS</Heading>
                <HotDeals/>
             </Box>

             <Box id="chickenBucket" >
             <Heading  m="50px 50px"   as="h1" size="lg">CHICKEN BUCKET</Heading>
                <ChickenBucket/>
             </Box>



             <Box id="hotLaunches">
             <Heading  m="50px 50px"   as="h1" size="lg">HOT LAUNCHES</Heading>
                <HotLaunches/>
             </Box>

             <Box id="boxMeals">
             <Heading  m="50px 50px"   as="h1" size="lg">BOX MEALS</Heading>
                <BoxMeals/>
             </Box>

             <Box id="burgers">
             <Heading  m="50px 50px"   as="h1" size="lg">BURGERS</Heading>
                <Burgers/>
             </Box>
             <Box id="biryaniBuckets">
             <Heading  m="50px 50px"   as="h1" size="lg">BIRYANI BUCKET</Heading>
                <BiryaniBuckets/>
             </Box>

             <Box id="snack">
             <Heading  m="50px 50px"   as="h1" size="lg">Snack</Heading>
                <Snack/>
             </Box>

             <Box id="beveragesAndDesserts">
             <Heading  m="50px 50px"   as="h1" size="lg">BEVERAGES AND DESSERTS</Heading>
                <BeveragesAndDesserts/>
             </Box>

        </Grid>
      </Grid>
    </Box>
  );
};

export default Menu;


