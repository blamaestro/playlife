import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PlayLife</title>
      </Head>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="common.white"
        height="100vh"
        bgcolor="grey.extradark"
      >
        <Typography variant="h2">Landing Page</Typography>
      </Box>
    </>
  )
}

export default Home
