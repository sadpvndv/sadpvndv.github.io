import styled from 'styled-components';
import { withTranslation } from '../i18n';

import { FaFileDownload } from 'react-icons/fa';

const StyledAbout = styled.section`
  background: ${({ theme }) => theme.colors.black};
  padding: 8rem 3rem;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.medium};
  }

  p {
    color: white;
    width: 40rem;
    font-size: ${({ theme }) => theme.typography.small};
    padding: 1rem 0;
  }

  a {
    background: ${({ theme }) => theme.colors.darkGray};
    border: none;
    padding: 1rem;
    border-radius: 0.2rem;
    transition: all ease-out 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    width: 18rem;
    font-size: 1.2rem;
    color: white;
    margin-top: 2rem;

    svg {
      fill: white;
      margin-right: 0.5rem;
      transition: all 0.3s;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};

      svg {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

function About({ forwardedRef, t }) {
  return (
    <StyledAbout id="section2" ref={forwardedRef}>
      <div>
        <h3>{t('aboutTitle')}</h3>
        <p>{t('aboutp1')}</p>
        <p>{t('aboutp2')}</p>
        <a href={t('resumeLink')}>
          <FaFileDownload />
          {t('resumeButton')}
        </a>
      </div>
    </StyledAbout>
  );
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(About);
