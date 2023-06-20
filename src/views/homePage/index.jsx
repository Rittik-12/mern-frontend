import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from 'views/navbar'
import MyPostWidget from 'views/widgets/MyPostWidget'
import PostsWidget from 'views/widgets/PostsWidget'
import UserWidget from 'views/widgets/UserWidget'

export const HomePage = () => {
  const isNonMobileScreen=useMediaQuery("(min-width:1000px)");
  const {_id,picturePath}=useSelector((state)=>state.user);
  return (
    <Box>
      <Navbar/>
      <Box width="100%"
      padding="2rem 6%"
      display={isNonMobileScreen? "flex":"block"}
      gap="0.5rem"
      justifyContent="space-between">
      
      <Box flexBasis={isNonMobileScreen? "26%": undefined}>
        <UserWidget userId={_id} picturePath={picturePath}/>
      </Box>
      <Box flexBasis={isNonMobileScreen?"42%":undefined}
            mt={isNonMobileScreen? undefined: "2rem"}>
        <MyPostWidget picturePath={picturePath} />
        <PostsWidget userId={_id}/>
      </Box>
      {isNonMobileScreen && (
        <Box flexBasis="26%">
         
        </Box>
      )}
      </Box>
    </Box>
  )
}