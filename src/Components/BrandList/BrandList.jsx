import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'

function BrandList() {

    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "brands"}}) {
            edges {
              node {
                id
                name
                publicURL
              }
            }
          }
    }
  `);

console.log(data);
  return (
    <div className='brand-list-container'>
    {
       data&&data.allFile&&data.allFile.edges?.map((each)=>{

    

           return <img src={each.node.publicURL} alt="" />

        })
    }
    </div>
  )
}

export default BrandList


