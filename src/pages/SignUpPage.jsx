import { useNavigate } from 'react-router-dom';
import SignUpForm from '../components/auth/SignUpForm';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // You can add more validation here if needed
    navigate('/dashboard'); // Redirect to the dashboard
  };

  return (
    <div className="min-h-screen bg-zinc-800 flex items-center justify-center">
      <SignUpForm onSubmit={handleSignUp} />
    </div>
  );
};

export default SignUpPage;
