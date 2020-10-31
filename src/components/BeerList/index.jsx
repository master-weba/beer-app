import React, { useContext, useEffect } from 'react'
import {Pagination, Row} from "antd";
import {ContextApp} from "../../StoreContext";
import { WrapperStyles } from "../../App";
import {CardBeer} from "../CardBeer";

const BeerList = () => {
  const { actions, state } = useContext(ContextApp)
  useEffect(() => {
    actions.selectBeers(1, 20)
  }, [])
  const searched = state.beers && state.beers.filter(item => {
    return item.name.toLowerCase().indexOf(state.searchValue) !== -1
  } )

  const EqualFilter = (data, item) => {
    if (data) {
      if (data) {
        return item.abv > state.filterValue.value
      }
      return item.abv < state.filterValue.value
    }
  }

  const filtered = searched ? searched.filter( item => EqualFilter(state.filterValue.value, item) )
    : state.beers && state.beers( item => EqualFilter(state.filterValue.value, item) )
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
