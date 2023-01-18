import * as S from "./styles";

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="./img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <S.Title>React avançado</S.Title>
      <S.Description>
        TypeScript, ReactJS, NextJS e Styled Components.
      </S.Description>
      <S.Illustration
        src="./img/hero-illustration.svg"
        alt="Um desenvolvedor em frente a telas com códigos"
      />
    </S.Wrapper>
  );
};

export default Main;