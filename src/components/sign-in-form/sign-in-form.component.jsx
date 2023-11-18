import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
// import { UserContext } from "../../contexts/user.context";
import {
  signInAuthUserFromEmailAndPassword,
  // createUserDocumnetFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  // console.log(formFields);
  // const { setCurrentUser } = useContext(UserContext);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserFromEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user);
      // console.log(response);
      resetFormFields();
    } catch (error) {
      // if (error.code === "auth/wrong-password") {
      //   alert("incorrect password", error.message);
      // }
      // console.log("user sign-in encounters an error", error.message);
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password", error.message);
          break;
        case "auth/user-not-found":
          alert("no user associated with the email");
          break;
        default:
          console.log(error.message);
      }
    }
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></FormInput>
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></FormInput>
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
