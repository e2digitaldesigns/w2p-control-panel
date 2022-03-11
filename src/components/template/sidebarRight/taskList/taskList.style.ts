import styled from "styled-components";

export const ToDoWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows:
    auto
    ${props => props.theme.sizes.sidebarRight.footerHeight};
`;

export const ToDoItems = styled.div`
  height: 100%;
  overflow-y: scroll;
`;

interface IntToDoItem {
  isChecked?: boolean;
}
export const ToDoItem = styled.div<IntToDoItem>`
  display: grid;
  grid-template-columns: 2rem auto 1.5rem;
  cursor: pointer;
  background: #eee;
  transition: 0.2s;
  /* user-select: none; */
  align-content: center;
  font-size: 0.75rem;
  overflow: hidden;

  > div {
    width: 100%;
    padding: 0.375rem 0.25rem 0.5rem 0.25rem;
    overflow: hidden;
    &:nth-child(3) {
      text-align: center;
      &:hover {
        color: white;
        background: red;
        > svg {
          color: white;
        }
      }
    }
    > svg {
      height: 0.75rem;
      width: 0.75rem;
      color: ${props => props.theme.colors.iconColor};
    }
  }

  &:nth-child(odd) {
    background: #f9f9f9;
  }

  text-decoration: ${props => (props.isChecked ? "line-through" : "none")};

  &:hover {
    background: #ddd;
    > div > svg {
      height: 0.75rem;
      width: 0.75rem;
      color: ${props => props.theme.colors.iconColorHover1};
    }
  }
`;

export const ToDoItemText = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  white-space: pre-line;
`;

export const ToDoItemTime = styled.div`
  width: 100%;
  padding-top: 0.25rem;
  font-size: 0.625rem;
`;

export const ToDoForm = styled.div`
  display: grid;
  grid-gap: 0.25rem;
  grid-template-rows: 3fr 1fr;
  padding: 0.25rem;
  border-top: 0.0625em solid ${props => props.theme.colors.borderColor};
  height: 100%;
`;

export const Textarea = styled.textarea`
  border: 0.0625em solid ${props => props.theme.colors.borderColor};
  overflow: auto;
  outline: none;
  box-shadow: none;
  resize: none;
  padding: 0.25rem;
  font-size: 0.75rem;
  height: 100%;
  width: 100%;
`;

export const AddButton = styled.button`
  border: 0.0625em solid ${props => props.theme.colors.borderColor};
  background: ${props => props.theme.colors.greyC};
  overflow: auto;
  outline: none;
  padding: 0.125rem;
  font-size: 0.625rem;
`;
