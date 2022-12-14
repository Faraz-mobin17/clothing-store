import { signInWithGooglePopup } from "../../utils/firebase/firebase.util";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
