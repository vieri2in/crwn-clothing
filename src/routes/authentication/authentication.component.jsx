import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
const Authentication = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (!response) {
  //     const userDocRef = await createUserDocumnetFromAuth(response.user);
  //   }
  // }, []);

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log(user);
  // };
  return (
    <div className="authentication-container">
      {/*<button onClick={logGoogleUser}>Sign in with Google pop up</button>*/}
      {/*<button onClick={signInWithGoogleRedirect}>
        Sign in with Google redirect
  </button>*/}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
