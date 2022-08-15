import styled from 'styled-components/native'

export const HomeContainer = styled.View`
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  flex: 1;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: ${({ theme }) => theme.sizing[24]};
`
