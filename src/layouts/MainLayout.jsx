import React from 'react'
import { Helmet } from "react-helmet";
import 'antd/dist/antd.css';

function MainLayout() {
  return (
    <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600&display=swap" />
      </Helmet>
  )
}

export default MainLayout