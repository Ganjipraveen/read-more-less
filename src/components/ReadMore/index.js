import {useState} from 'react'

import {
  MainContainer,
  ContentContainer,
  Title,
  Subtitle,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [button, setButtonText] = useState(false)
  const description = button
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  const buttonText = button ? 'Read Less' : 'Read More'

  const onClickButton = () => setButtonText(prevStatus => !prevStatus)

  return (
    <MainContainer>
      <ContentContainer>
        <Title>React Hooks</Title>
        <Subtitle>Hooks are a new addition to React</Subtitle>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{description}</Description>
        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </ContentContainer>
    </MainContainer>
  )
}

export default ReadMore
