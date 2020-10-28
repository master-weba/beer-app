import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import {Card, Col, Pagination, Row} from "antd";
import {ContextApp} from "../../StoreContext";
import { WrapperStyles } from "../../App";
import {CardBeer} from "../CardBeer";

const ImageContainerStyles = styled.div`
  text-align: center;
  margin-bottom: 20px;
  img {
    max-height: 300px;
  }
`

const TitleContainerStyles = styled.div`
  font-size: 14px;
  font-weight: bold;
`

const TagGrayStyles = styled.div`
  color: gray;
  font-size: 12px;
`
const DateStyles = styled.div`
  font-size: 12px;
`

const BeerList = () => {
  const { actions, state } = useContext(ContextApp)
  useEffect(() => {
    actions.selectBeers(1, 20)
  }, [])
  const searched = state.beers && state.beers.filter(item => {
    return item.name.toLowerCase().indexOf(state.searchValue) !== -1
  } )

  const filtered = searched ? searched.filter( item => {
    if (state.filterValue.value) {
      if (state.filterValue.more) {
        return item.abv > state.filterValue.value
      }
      return item.abv < state.filterValue.value
    }
  } ) : state.beers && state.beers( item => {
    if (state.filterValue.value) {
      if (state.filterValue.more) {
        return item.abv > state.filterValue.value
      }
      return item.abv < state.filterValue.value
    }
  } )
  console.log(searched, filtered, state.beers)
  return (
    <WrapperStyles>
      <Row gutter={[16,16]}>
        {
          !!searched.length && !filtered.length && <CardBeer data={searched} />
        }
        {
          !searched.length && !filtered.length && <CardBeer data={state.beers} />
        }
        {
          !!filtered.length && <CardBeer data={filtered} />
        }
      </Row>
      <Pagination onChange={(page) => {
        actions.selectBeers(page)
      }} total={30}/>
    </WrapperStyles>
  )
}

export default BeerList
