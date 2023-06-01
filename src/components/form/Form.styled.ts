import styled from "styled-components";

export const FormContainer = styled.div`
  border: 1px solid grey;
  border-radius: 20px;
  padding: 20px;
  width:49%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

interface FormLabelProps {
    htmlFor: string;
}

export const FormLabel = styled.label.attrs((props: FormLabelProps) => ({
    htmlFor: props.htmlFor,
}))`
  font-size: 22px;
  font-weight: 600;
  font-style: normal;
  margin-bottom: 15px;
`;

interface IInput {
  type: string;
  placeholder: string;
  id: string;
  
}

export const FormInput = styled.input.attrs((props: IInput) => ({
  type: props.type,
  placeholder: props.placeholder,
  id: props.id
}))`
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  padding: 10px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
