import React from 'react'
import * as S from './styles'


const Header = ({title}) => {
    return (
      <S.Head>
          <S.HeadText>{title}</S.HeadText>
      </S.Head>
    )
}

export default Header
