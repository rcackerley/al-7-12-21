import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { getColor } from "../../theme/theme"

const largeTitle = css`
  font-size: 24px;
  line-height: 26px;
`

const smallTitle = css`
  font-size: 20px;
  line-height: 26px;
`

const localThemes = {
  large: {
    titleFont: largeTitle,
    titleMargin: "24px 0 12px 0",
    childrenMargin: "24px 0 0 0",
    containerPadding: "80px",
  },
  small: {
    titleFont: smallTitle,
    titleMargin: "16px 0 8px 0",
    childrenMargin: "16px 0 0 0",
    containerPadding: "40px",
  },
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;
  color: ${getColor("greyDark")};
  text-align: center;
  padding: ${({ localTheme }) => localTheme.containerPadding};
`

const Title = styled.div`
  ${({ localTheme }) => localTheme.titleFont};
  font-weight: 400;
  margin: ${({ localTheme }) => localTheme.titleMargin};
`

const SubText = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
`

const Children = styled.div`
  margin: ${({ localTheme }) => localTheme.childrenMargin};
`
/**
 * Example of how to create an EmptyState:
 *
 * <EmptyState
 * size="large"
 * text="Here is some subtext."
 * thumbnail={<ActivitiesEmptyImage width="121px" height="102px" />}
 * title="This is my title."
 * />
 */
export const EmptyState = ({
  children,
  size = "large",
  thumbnail,
  title,
  text,
}) => {
  const localTheme = localThemes[size]
  return (
    <Container localTheme={localTheme}>
      {thumbnail}
      <Title localTheme={localTheme}>{title}</Title>
      <SubText>{text}</SubText>
      {children && <Children localTheme={localTheme}>{children}</Children>}
    </Container>
  )
}

EmptyState.propTypes = {
  /** Adjusts font size of title and text. Options are 'small' or 'large'. If none is provided, the default is 'large' */
  size: PropTypes.string,
  /** Renders an image above the title and text */
  thumbnail: PropTypes.func,
  /** The title (or larger text) displayed */
  title: PropTypes.string,
  /** The subtext (or smaller text) displayed */
  text: PropTypes.string,
}
