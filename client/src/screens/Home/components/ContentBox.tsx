import * as React from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components'
import Box, { Variants as BoxVariants } from '../../../components/Box'
import starIcon from '../../../assets/images/icons/star.svg'

export enum Variants {
  rating = 'rating',
  cyanTitle = 'greenTitle',
}

enum TitleVariants {
  light = 'light',
  cyan = 'cyan',
}

const getBoxVariant = (variant?: Variants) => {
  switch (variant) {
    case Variants.rating:
      return BoxVariants.accent
    default:
      return undefined
  }
}

const getTitleVariant = (variant?: Variants) => {
  switch (variant) {
    case Variants.rating:
      return TitleVariants.light
    case Variants.cyanTitle:
      return TitleVariants.cyan
    default:
      return undefined
  }
}

const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Title = styled(Text)<{ variant?: TitleVariants }>`
  font-family: AvantGardePro;
  font-weight: 900;
  font-size: 60px;
  color: ${props => {
    switch (props.variant) {
      case TitleVariants.light:
        return 'var(--white)'
      case TitleVariants.cyan:
        return 'var(--cyan)'
      default:
        return 'var(--dark-blue)'
    }
  }};
  letter-spacing: -2.73px;
  text-align: center;
`

const Subtitle = styled(Text)<{ light?: boolean }>`
  font-family: AvantGardePro;
  font-weight: 500;
  font-size: 18px;
  color: ${props => (props.light ? 'var(--white)' : 'var(--gray)')};
  letter-spacing: -0.45px;
  text-align: center;
  ${props => props.light && 'opacity: 0.6;'}
`

const StarIcon = styled(Image)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 30px;
`

interface ContentBoxProps {
  variant?: Variants
  title: string
  subtitle: string
}

const ContentBox = ({ variant, title, subtitle }: ContentBoxProps) => {
  return (
    <Box variant={getBoxVariant(variant)} style={{ height: 240 }}>
      <Wrapper>
        {variant === Variants.rating && <StarIcon source={{ uri: starIcon }} />}
        <Title variant={getTitleVariant(variant)}>{title}</Title>
        <Subtitle light={variant === Variants.rating}>{subtitle}</Subtitle>
      </Wrapper>
    </Box>
  )
}

export default ContentBox
