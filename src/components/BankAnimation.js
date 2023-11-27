import styled from 'styled-components';

const StyledObject = styled.object`
  width: 350px;
  height: 350px;
`;

const BanksAnimation = () => {
    return (
        <StyledObject type="image/svg+xml" data={process.env.PUBLIC_URL + "/Animation_Banks_2.svg"}>
            <p>Sorry, your browser does not support SVG.</p>
        </StyledObject>
    );
};

export default BanksAnimation;