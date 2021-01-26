import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const StyledCard = styled.div`
  padding-bottom: 2rem;

  .flip-box {
    background-color: transparent;
    width: 300px;
    height: 200px;
    perspective: 1000px;
    text-align: center;
  }

  .flip-box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  .flip-box:hover .flip-box-inner {
    transform: rotateY(180deg);
  }

  .flip-box-front,
  .flip-box-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
  }

  .flip-box-front img {
    border-radius: 10px;
  }

  .flip-box-back {
    background-color: ${({ theme }) => theme.colors.darkGray};
    color: white;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem 2rem;
  }

  .flip-box-back h2 {
    margin-top: 50px;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    margin-top: 1.5rem;
  }

  a {
    margin-top: 1.5rem;
  }

  svg {
    fill: ${({ theme }) => theme.colors.tertiary};
    transition: all 0.3s;

    &:hover {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  img {
    width: 300px;
    height: 200px;
  }
`;

function FlipCard({ img, title, link, icon }) {
  return (
    <StyledCard>
      <div class="flip-box">
        <div class="flip-box-inner">
          <div class="flip-box-front">
            <img src={img} alt={title} />
          </div>
          <div class="flip-box-back">
            <h2>{title}</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              laudantium, voluptas aspernatur quia veniam at deleniti sed
              doloribus numquam adipisci vel ipsam odit aut beatae corrupti, cum
              ut quas reiciendis!
            </p>
            <a href={link} target="_blank">
              <FaExternalLinkAlt size={25} />
            </a>
          </div>
        </div>
      </div>
    </StyledCard>
  );
}

export default FlipCard;