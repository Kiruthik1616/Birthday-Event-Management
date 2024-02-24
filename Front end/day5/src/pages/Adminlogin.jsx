
import { useFormik } from 'formik';
import * as yup from 'yup';
import '../assets/css/Logincss.css';
import { Link } from 'react-router-dom'
import bg from '../assets/images/bg.jpg';
const Adminlogin = () => {
  const validationSchema = yup.object({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
  });
  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle login logic here
      console.log('Login submitted with values:', values);
    },
  });

  return (
    
    <div className="login-container">
      <div className="bg" style={backgroundImageStyle}>np
      <form onSubmit={formik.handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error-message">{formik.errors.email}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error-message">{formik.errors.password}</div>
          )}
        </div>
        <Link to="/Crud">
        <button type="submit" className="submit-button" disabled={!formik.isValid}>
          Login
        </button>
        </Link>
        <Link to="/">
        <button type="submit" className="submit-button" disabled={!formik.isValid}>
          Go Back
        </button>
        </Link>
      </form>
    </div>
    </div>
  );
};

export default Adminlogin;
