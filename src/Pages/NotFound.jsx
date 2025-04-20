import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Animation
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Styles
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #f0fdfa 0%, #ecfdf5 100%);
  padding: 4.5rem;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const ErrorCard = styled.div`
  background: white;
  border-radius: 24px;
  padding: clamp(2rem, 5vw, 4rem);
  box-shadow: 0 12px 36px rgba(5, 150, 105, 0.08);
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg,rgb(13, 148, 24),rgb(9, 168, 28));
  }
`;

const FloatingIllustration = styled.div`
  width: clamp(120px, 30vw, 180px);
  height: clamp(120px, 30vw, 180px);
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, #ecfdf5, #ccfbf1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${float} 4s ease-in-out infinite;
  box-shadow: 0 8px 24px rgba(13, 148, 136, 0.1);
  
  svg {
    width: 60%;
    height: 60%;
    color:rgb(19, 146, 5);
  }
`;

const ErrorCode = styled.h1`
  font-size: clamp(4rem, 15vw, 8rem);
  font-weight: 800;
  color: transparent;
  background: linear-gradient(120deg,rgb(21, 129, 5),rgb(7, 101, 23));
  -webkit-background-clip: text;
  background-clip: text;
  line-height: 1;
  margin: 0.5rem 0;
`;

const ErrorTitle = styled.h2`
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  color:rgb(15, 118, 34);
  margin: 1rem 0;
  font-weight: 700;
`;

const ErrorDescription = styled.p`
  font-size: clamp(1rem, 3vw, 1.1rem);
  color: #475569;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const ActionButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: clamp(0.75rem, 3vw, 1rem) clamp(1.5rem, 4vw, 2rem);
  background: linear-gradient(135deg,rgb(13, 148, 15),rgb(12, 158, 25));
  color: white;
  border-radius: 12px;
  font-weight: 600;
  font-size: clamp(0.9rem, 3vw, 1rem);
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(13, 148, 136, 0.3);
  margin: 1rem 0;
  border: none;
  cursor: pointer;
  gap: 8px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(13, 148, 136, 0.4);
  }
`;

const SearchContainer = styled.div`
  margin-top: 2rem;
  width: 100%;

  input {
    width: 100%;
    max-width: 400px;
    padding: clamp(0.75rem, 3vw, 1rem) clamp(1rem, 4vw, 1.5rem);
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: clamp(0.9rem, 3vw, 1rem);
    transition: all 0.3s;
    outline: none;
    margin: 0 auto;

    &:focus {
      border-color: #0d9488;
      box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.2);
    }
  }
`;

const NotFound = () => {
  return (
    <PageContainer>
      <MainContent>
        <ErrorCard>
          <FloatingIllustration>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </FloatingIllustration>
          
          <ErrorCode>404</ErrorCode>
          <ErrorTitle>Oups ! Page introuvable</ErrorTitle>
          <ErrorDescription>
            Nous n'avons pas trouvé ce que vous cherchiez. La page peut avoir été déplacée ou n'existe plus.
          </ErrorDescription>
          
          <ActionButton to="/accueil">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Retour à l'accueil
          </ActionButton>
          
          
        </ErrorCard>
      </MainContent>
    </PageContainer>
  );
};

export default NotFound;