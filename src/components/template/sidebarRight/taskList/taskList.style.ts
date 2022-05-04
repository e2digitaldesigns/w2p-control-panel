import styled from "styled-components";
import { ScrollBars } from "../../../../theme/scrollDiv/scrollDiv";

export const ToDoWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows:
    auto
    ${props => props.theme.sizes.sidebarRight.footerHeight};
  background-color: ${props => props.theme.taskList.bg};
`;

export const ToDoItems = styled(ScrollBars)`
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
  background-color: ${props => props.theme.taskList.item.bg};
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
        color: ${props => props.theme.taskList.item.hover.del.font};
        background-color: ${props => props.theme.taskList.item.hover.del.bg};
        > svg {
          color: ${props => props.theme.taskList.item.hover.del.icon};
        }
      }
    }
    > svg {
      height: 0.75rem;
      width: 0.75rem;
      color: ${props => props.theme.default.icon.color};
    }
  }

  &:nth-child(odd) {
    background-color: ${props => props.theme.taskList.item.oddBg};
  }

  text-decoration: ${props => (props.isChecked ? "line-through" : "none")};

  &:hover {
    background-color: ${props => props.theme.taskList.item.hover.bg};
    > div > svg {
      height: 0.75rem;
      width: 0.75rem;
      color: ${props => props.theme.taskList.item.hover.font};
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
  border-top: 0.0625em solid ${props => props.theme.default.borderColor};
  height: 100%;
`;

export const Textarea = styled.textarea`
  border: 0.0625rem solid ${props => props.theme.default.borderColor};
  background: ${props => props.theme.taskList.form.textArea.bg};
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
  border: 0.0625rem solid ${props => props.theme.default.borderColor};
  background: ${props => props.theme.taskList.form.addButton.bg};
  overflow: hidden;
  outline: none;
  padding: 0.125rem;
  font-size: 0.75rem;
`;
