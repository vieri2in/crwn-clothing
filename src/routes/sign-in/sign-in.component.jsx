import {
  signInWithGooglePopup,
  createUserDocumnetFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumnetFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google pop up</button>
    </div>
  );
};
export default SignIn;
