import React from 'react'

import * as S from './styled'

const PostItem = () => (
  <S.PostItemLink to="/slug/">
    <S.PostItemWrapper>
      <S.PostItemTag background="#47650B">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>30 de Julho de 2020 4 min de leitura</S.PostItemDate>
        <S.PostItemTitle>TesteTesteTeste</S.PostItemTitle>
        <S.PostItemDescription>loremloremloreloremlorem</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem