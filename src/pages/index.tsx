import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import config from '../../data/SiteConfig'

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

class Index extends React.Component<Props> {
  render() {
    const { data } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Helmet title={config.siteTitle} />
          <GlobalStyle />
          {data.site.siteMetadata.title}
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default Index

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`
