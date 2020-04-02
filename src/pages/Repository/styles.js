import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  white-space: pre-line;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #a34a15;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #cdcdcd;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #cdcdcd;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #cdcdcd;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          color: #a34a15;
          text-decoration: none;

          &:hover {
            color: #1e352a;
          }
        }

        span {
          /* ECDAD1 */
          background: #ecaaa0;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const IssuesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const FilterButton = styled.button`
  width: 60px;
  height: 25px;
  background: ${(props) => (props.active ? '#a34a15' : '#ecdad1')};
  margin-bottom: 15px;
  font-size: 15px;

  color: ${(props) => (props.active ? '#ecdad1' : '#a34a15')};
  border : 1px solid #a34a15;


  /* border: 1px solid ${(props) => (props.active ? '#a34a15' : '#ecaaa0')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')}; */

  &:hover {
    background: #a34a15;
    color: #ecdad1;
  }

  & + button {
    margin-left: 4px;
  }
`;

export const Pages = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const NavButton = styled.button.attrs((props) => ({
  disabled: !props.active,
}))`
  width: 60px;
  height: 25px;

  border: 1px solid #ecaaa0;
  background: #ecdad1;
  color: #a34a15;

  margin-bottom: 15px;
  font-size: 15px;

  &:hover {
    background: #a34a15;
    color: #ecdad1;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  & + button {
    margin-left: 4px;
  }
`;

export const IssuesFooter = styled.div`
  strong {
    display: flex;
    justify-content: flex-end;
    color: #a34a15;
    margin-top: 15px;
  }
`;
