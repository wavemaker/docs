---
last_update: { author: "Author Name" }
---

# Input validations

Validating user input to ensure data quality and security.

## Overview

Input validation is crucial for maintaining data integrity and providing good user experience through clear feedback.

## Form Validation

```jsx
const RegistrationForm = () => {
  const [errors, setErrors] = useState({});

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData);
    const validationErrors = validate(values);

    if (Object.keys(validationErrors).length === 0) {
      // Submit form
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" />
      {errors.email && <span>{errors.email}</span>}

      <input name="password" type="password" />
      {errors.password && <span>{errors.password}</span>}

      <button type="submit">Register</button>
    </form>
  );
};
```

## Validation Rules

```javascript
const validationRules = {
  required: (value) => !!value || 'This field is required',
  email: (value) => /\S+@\S+\.\S+/.test(value) || 'Invalid email',
  minLength: (min) => (value) =>
    value.length >= min || `Minimum ${min} characters required`,
  maxLength: (max) => (value) =>
    value.length <= max || `Maximum ${max} characters allowed`,
};
```

## Real-time Validation

```jsx
const EmailInput = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    // Validate on change
    if (!newValue) {
      setError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(newValue)) {
      setError('Invalid email format');
    } else {
      setError('');
    }
  };

  return (
    <div>
      <input
        type="email"
        value={value}
        onChange={handleChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};
```

## Related Documentation

- [UI Event handling](#)

