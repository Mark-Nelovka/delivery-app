import * as styles from "./Form.styled";

export const Form = () => {
  return (
    <styles.FormContainer>
      <styles.Form>
        <styles.FormLabel htmlFor="name">Name:</styles.FormLabel>
        <styles.FormInput
          type="text"
          id="name"
          placeholder="Name"
        ></styles.FormInput>
        <styles.FormLabel htmlFor="email">Email:</styles.FormLabel>
        <styles.FormInput
          type="email"
          placeholder="Email"
          id="email"
        ></styles.FormInput>
        <styles.FormLabel htmlFor="phone">Phone:</styles.FormLabel>
        <styles.FormInput
          type="number"
          placeholder="Number phone"
          id="phone"
        ></styles.FormInput>
        <styles.FormLabel htmlFor="address">Address:</styles.FormLabel>
        <styles.FormInput
          type="text"
          placeholder="Address"
          id="address"
        ></styles.FormInput>
      </styles.Form>
    </styles.FormContainer>
  );
};
