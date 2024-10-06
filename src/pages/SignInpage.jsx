import { useNavigate } from 'react-router-dom';
import SignInForm from '../components/auth/SignInForm';

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // You can add validation here if needed, for now, we just redirect
    navigate('/dashboard'); // Redirect to dashboard route
  };

  return (
    <div className="min-h-screen bg-zinc-800 flex items-center justify-center">
      <SignInForm onSubmit={handleSignIn} />
      
    </div>
  );
};

export default SignInPage;
