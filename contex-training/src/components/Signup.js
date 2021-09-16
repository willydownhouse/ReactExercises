import React from 'react';
import { Formik, Form, Field, useField, ErrorMessage } from 'formik';
import {
  TextField,
  Box,
  Button,
  Select,
  MenuItem,
  Typography,
  makeStyles,
} from '@material-ui/core';

const MyTextField = ({ type = 'text', variant, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errText = meta.error && meta.touched ? meta.error : '';

  return (
    <TextField
      {...field}
      helperText={errText}
      error={!!errText}
      autoComplete="off"
      placeholder={placeholder}
      variant={variant}
      type={type}
      fullWidth
    />
  );
};

const useStyles = makeStyles({
  cont: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
  },
  form: {
    gridColumn: '2 / 3',
  },
  select: {
    width: '50%',
  },
});

function Signup(props) {
  const classes = useStyles();
  return (
    <Box className={classes.cont}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          phone: '',
          sport: '',
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
        validate={values => {
          const errors = {};
          const required = 'Field is required.';

          if (!values.email) {
            errors.email = required;
          }
          if (!values.password) {
            errors.password = required;
          }
          if (!values.phone) {
            errors.phone = required;
          }
          if (!values.sport) {
            errors.sport = required;
          }

          return errors;
        }}
      >
        {({ values, isValid, dirty }) => (
          <Form className={classes.form}>
            <Box margin>
              <Typography variant="subtitle1" gutterBottom>
                Email
              </Typography>
              <MyTextField
                name="email"
                variant="outlined"
                placeholder="email"
              />
            </Box>
            <Box margin>
              <Typography variant="subtitle1" gutterBottom>
                Password
              </Typography>
              <MyTextField
                name="password"
                variant="outlined"
                placeholder="password"
                type="password"
              />
            </Box>
            <Box margin>
              <Typography variant="subtitle1" gutterBottom>
                Phone
              </Typography>
              <MyTextField
                name="phone"
                variant="outlined"
                placeholder="phone"
              />
            </Box>
            <Box margin>
              <Typography variant="subtitle1" gutterBottom>
                Sport
              </Typography>
              <Field className={classes.select} name="sport" as={Select}>
                <MenuItem value="mountainbiking">Mountainbiking</MenuItem>
                <MenuItem value="skiing">Skiing</MenuItem>
                <MenuItem value="hiking">Hiking</MenuItem>
                <MenuItem value="surfin">Surfin</MenuItem>
              </Field>
            </Box>
            <Box margin>
              <ErrorMessage
                name="sport"
                component={Typography}
                variant="caption"
                color="secondary"
              />
            </Box>
            <Box margin>
              <Button
                disabled={!isValid || !dirty}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </Box>

            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default Signup;
