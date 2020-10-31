import React, { useContext } from 'react'
import {Input} from "antd";
import {ContextApp} from "../../StoreContext";
import {WrapperStyles} from "../../App";


export const SearchContainer = () => {
  const { actions } = useContext(ContextApp)
  const val = localStorage.getItem('searchValue')
  return (
    <WrapperStyles>
      <Input name="search"  defaultValue={val} placeholder={'Введите название певка'} onChange={(e) => { actions.setSearchValue(e.target.value) }}/>
    </WrapperStyles>
  )
}
