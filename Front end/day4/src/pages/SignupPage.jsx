import { useFormik } from 'formik';
import * as yup from 'yup';
import '../assets/css/Signupcss.css'; 
import { Link } from 'react-router-dom'


const SignupPage = () => {
  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle signup logic here
      console.log('Signup submitted with values:', values);
    },
  });

  return (
    <div className="signup-container">
      <form onSubmit={formik.handleSubmit} className="signup-form">
        <h2>Signup</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error-message">{formik.errors.name}</div>
          )}
        </div>

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
        <Link to="/LoginPage">
        <button type="submit" className="submit-button" disabled={!formik.isValid}>
          Signup
        </button>
        </Link>
      </form>
    </div>
  );
};

export default SignupPage;
