import styled from "@emotion/styled";


export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 20px;
  width: 100%;
  border: 1px solid #8b8bf5;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 rgba(139, 139, 245, 0.5);
`
export const LabelWrapper = styled.label`
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  pointer-events: none;
  color: rgba(0, 0, 0, 0.5);
  transition: all ease-in-out .1s;
  font-size: 12px;
  top: -15px;
  left: 15px;
`
export const InputWrapper = styled.input`
  border: none;
  color: rgba(0, 0, 0, 0.5);
  background-color: inherit;
`