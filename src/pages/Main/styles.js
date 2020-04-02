import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form.attrs((props) => ({
  error: props.error,
}))`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #a34a15;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    background: #ecdad1;
  }

  ${(props) =>
    props.error &&
    css`
      input {
        border: 2px solid red;
      }
    `}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #a34a15;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const Warning = styled.div`
  padding: 10px 15px;
  display: ${(props) => (props.active ? 'flex' : 'none')};
  color: red;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    small {
      color: #a34a15;
    }

    small:hover {
      cursor: pointer;
    }

    div {
      display: flex;
      align-items: center;
    }

    span {
      margin-left: 10px;
    }

    /* Apply a style to all li's, less to the first */
    & + li {
      border-top: 1px solid #cdcdcd;
    }

    a {
      color: #a34a15;
      text-decoration: none;
    }
  }
`;
