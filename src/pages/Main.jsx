import React, {useContext, useEffect} from 'react'
import {Container} from "../App";
import Logo from "../components/Logo";
import styled from 'styled-components'
import BeerList from "../components/BeerList";
import {ContextApp} from "../StoreContext";
import {SearchContainer} from "../components/Search";
import {FilterContainer} from "../components/FilterContainer";

const Header = styled.header`
  background: #282c34;
  padding: 30px 0;
`

const Content = styled.main`
  padding: 40px 0;
  background: #f3f7fc;
`

const Main = () => {
  const { actions, state } = useContext(ContextApp)
  useEffect(() => {
    actions.setSearchValue(localStorage.getItem('searchValue'))
    actions.setFilterValue(localStorage.getItem('filterValue'))
  },[])
  return (
    <div>
      <Header>
        <Container>
          <Logo />
        </Container>
      </Header>
      <Content>
        <Container>
          <SearchContainer />
          <FilterContainer />
          <BeerList />
        </Container>
      </Content>
    </div>
  )
}

export default Main
