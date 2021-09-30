// ! Delete this comment or delete component if its doesn't use
import { FormikErrors, useFormik } from 'formik';
import { FC } from 'react';

import { ICONS } from '../../../../configs/icons.config';
import { RoutePathsEnum } from '../../../../configs/routes.config';
import { UiIdsEnum } from '../../../../configs/ui-ids.config';
import { ISignUpFormValues } from '../../../../typings/forms-values.interfaces';
import { signUpFormValidation } from '../../../../validations/forms.validation';
import { FieldLabel } from '../../../common/FieldLabel';
import { Form } from '../../../common/form/Form';
import { FormBlock } from '../../../common/form/FormBlock';
import { FormText } from '../../../common/form/FormText';
import { SvgIcon } from '../../../common/SvgIcon';
import { Button } from '../../../common/ui/Button';
import { Input } from '../../../common/ui/Input';
import { Link } from '../../../common/ui/Link';
import { BoolRp } from '../../../logic/BoolRp';

type Props = {
  submitFetching: boolean;
  error?: string;

  onSubmit: (values: ISignUpFormValues) => void;
};

export const SignUpForm: FC<Props> = (props) => {
  const { submitFetching, onSubmit, error } = props;

  const formik = useFormik<ISignUpFormValues>({
    validationSchema: signUpFormValidation(),
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: {
      confirmPassword: 'Qwerty123!',
      firstName: 'TestFirstName',
      lastName: 'TestLastName',
      password: 'Qwerty123!',
      email: 'test@s-pro.io',
    },
    validate: () => {
      const errors: FormikErrors<ISignUpFormValues> = {};

      return errors;
    },
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  const { getFieldProps, handleSubmit, touched, isValid, errors } = formik;

  return (
    <Form onSubmit={handleSubmit}>
      <FormBlock marginBottom="s6">
        <FormText text="Sign up" type="title" />
      </FormBlock>

      <FormBlock marginBottom="s2">
        <FieldLabel
          blockTitle
          subLabel="Required"
          status={{
            error: touched.firstName && !!errors.firstName,
            des: errors.firstName,
          }}
          label="First name"
        >
          <Input
            {...getFieldProps('firstName')}
            placeholder="Enter your first name"
            error={touched.firstName && !!errors.firstName}
            id={UiIdsEnum.SIGN_UP_FORM_FIRST_NAME}
          />
        </FieldLabel>

        <FieldLabel
          blockTitle
          subLabel="Required"
          status={{
            error: touched.lastName && !!errors.lastName,
            des: errors.lastName,
          }}
          label="Last name"
        >
          <Input
            {...getFieldProps('lastName')}
            placeholder="Enter your last name"
            error={touched.lastName && !!errors.lastName}
            id={UiIdsEnum.SIGN_UP_FORM_LAST_NAME}
          />
        </FieldLabel>

        <FieldLabel
          blockTitle
          subLabel="Required"
          status={{ error: touched.email && !!errors.email, des: errors.email }}
          label="Email address"
        >
          <Input
            {...getFieldProps('email')}
            placeholder="Enter your email here"
            error={touched.email && !!errors.email}
            id={UiIdsEnum.SIGN_UP_FORM_EMAIL}
          />
        </FieldLabel>

        <FieldLabel
          blockTitle
          subLabel="Required"
          status={{
            error: touched.password && !!errors.password,
            des: errors.password,
          }}
          label="Password"
        >
          <BoolRp
            render={({ boolValue, toggleBool }) => (
              <Input
                {...getFieldProps('password')}
                placeholder="Enter your password here"
                rightBlock={
                  <SvgIcon
                    onClick={toggleBool}
                    pointer
                    size="lg"
                    src={boolValue ? ICONS.eyeCrossedIcon : ICONS.eyeIcon}
                    id={UiIdsEnum.SIGN_UP_FORM_PASSWORD_ICON}
                  />
                }
                error={touched.password && !!errors.password}
                type={boolValue ? 'text' : 'password'}
                id={UiIdsEnum.SIGN_UP_FORM_PASSWORD}
              />
            )}
          />
        </FieldLabel>

        <FieldLabel
          blockTitle
          subLabel="Required"
          status={{
            error: touched.confirmPassword && !!errors.confirmPassword,
            des: errors.confirmPassword,
          }}
          label="Confirm password"
        >
          <BoolRp
            render={({ boolValue, toggleBool }) => (
              <Input
                {...getFieldProps('confirmPassword')}
                placeholder="Confirm password here"
                rightBlock={
                  <SvgIcon
                    onClick={toggleBool}
                    pointer
                    size="lg"
                    src={boolValue ? ICONS.eyeCrossedIcon : ICONS.eyeIcon}
                    id={UiIdsEnum.SIGN_UP_FORM_CONFIRM_PASSWORD_ICON}
                  />
                }
                error={touched.confirmPassword && !!errors.confirmPassword}
                type={boolValue ? 'text' : 'password'}
                id={UiIdsEnum.SIGN_UP_FORM_CONFIRM_PASSWORD}
              />
            )}
          />
        </FieldLabel>
      </FormBlock>

      {error && (
        <FormBlock marginBottom="s6">
          <FormText type="error" text={error} />
        </FormBlock>
      )}

      <FormBlock marginBottom="s3">
        <Button
          disabled={!isValid}
          loading={submitFetching}
          height="lg"
          type="submit"
          id={UiIdsEnum.SIGN_UP_FORM_SUBMIT}
        >
          Sign up
        </Button>
      </FormBlock>

      <FormBlock alignH="center">
        <Link
          id={UiIdsEnum.SIGN_UP_FORM_BACK_LINK}
          to={RoutePathsEnum.AUTH_SIGN_IN}
        >
          Back to sign in
        </Link>
      </FormBlock>
    </Form>
  );
};
