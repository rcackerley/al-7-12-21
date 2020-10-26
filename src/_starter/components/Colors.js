import React from "react"
import styled from "styled-components"
import { theme } from "../theme/theme"

const ColorsWrapper = styled.section`
  width: 90%;
  padding: 40px 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ColorContainer = styled.div`
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  align-items: center;

  .icon {
    margin-bottom: 10px;
    font-size: 30px;
  }
`

function Colors() {
  return (
    <ColorsWrapper>
      {Object.keys(theme.colors).map((color) => {
        return (
          <ColorContainer>
            <span style={{ lineHeight: 2 }}>{color}</span>
            <div
              style={{
                height: "40px",
                width: "40px",
                backgroundColor: `${theme.colors[color]}`,
                boxShadow: "1px 1px #e3e3e3",
              }}
            ></div>
            <span style={{ lineHeight: 2 }}>{theme.colors[color]}</span>
          </ColorContainer>
        )
      })}
    </ColorsWrapper>
  )
}

export default Colors
