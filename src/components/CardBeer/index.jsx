import React, {useContext} from 'react'
import {Card, Col} from "antd";
import styled from "styled-components";
import {ContextApp} from "../../StoreContext";

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


export const CardBeer = ({ data }) => {
  return (
    data && data.map(item => {
      return <Col span={6}>
        <Card style={{ height: 470 }}>
          <ImageContainerStyles>
            <img src={item.image_url} alt=""/>
          </ImageContainerStyles>
          <TitleContainerStyles>
            {item.name}
          </TitleContainerStyles>
          <TagGrayStyles>
            {item.tagline}
          </TagGrayStyles>
          <DateStyles>
            {item.first_brewed}
          </DateStyles>
          Крепость: {item.abv}
        </Card>
      </Col>
    })
  )
}
