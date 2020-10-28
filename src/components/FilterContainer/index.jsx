import React, {useContext} from 'react'
import styled from 'styled-components'
import {WrapperStyles} from "../../App";
import {Button} from "antd";
import {ContextApp} from "../../StoreContext";

const MarginRight = styled.span`
  margin-right: 8px;
`

export const FilterContainer = () => {
  const { actions } = useContext(ContextApp)

  return (
    <WrapperStyles>
      <MarginRight>
        <Button onClick={() => actions.setFilterValue({value: 5.5, more: false })}>
          Легкие посиделки
        </Button>
      </MarginRight>
      <Button onClick={() => actions.setFilterValue({value: 5.5, more: true })}>
        Чтоб нахрюкаться
      </Button>
    </WrapperStyles>
  )
}
