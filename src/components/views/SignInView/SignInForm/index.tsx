// ! Delete this comment or delete component if its doesn't use
import { FormikErrors, useFormik } from 'formik';
import { FC } from 'react';

import { ICONS } from '../../../../configs/icons.config';
import { RoutePathsEnum } from '../../../../configs/routes.config';
import { UiIdsEnum } from '../../../../configs/ui-ids.config';
import { ISignInFormValues } from '../../../../typings/forms-values.interfaces';
import { signInFormValidation } from '../../../../validations/forms.validation';
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

  onSubmit: (values: ISignInFormValues) => void;
};

export const SignInForm: FC<Props> = (props) => {
  const { submitFetching, onSubmit } = props;

  const formik = useFormik<ISignInFormValues>({
    validationSchema: signInFormValidation(),
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: {
      password: 'Qwerty123!',
      email: 'test@s-pro.io',
    },
    validate: () => {
      const errors: FormikErrors<ISignInFormValues> = {};

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
        <FormText text="Log in" type="title" />
      </FormBlock>

      <FormBlock marginBottom="s2">
        <FieldLabel
          blockTitle
          subLabel="Required"
          status={{
            error: touched.email && !!errors.email,
            des: errors.email,
          }}
          label="Email"
        >
          <Input
            {...getFieldProps('email')}
            placeholder="Enter your email here"
            error={touched.email && !!errors.email}
            id={UiIdsEnum.SIGN_IN_FORM_EMAIL}
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
                    id={UiIdsEnum.SIGN_IN_FORM_PASSWORD_ICON}
                  />
                }
                error={touched.password && !!errors.password}
                type={boolValue ? 'text' : 'password'}
                id={UiIdsEnum.SIGN_IN_FORM_PASSWORD}
              />
            )}
          />
        </FieldLabel>
      </FormBlock>

      <FormBlock marginBottom="s3">
        <Button
          disabled={!isValid}
          loading={submitFetching}
          height="lg"
          type="submit"
          id={UiIdsEnum.SIGN_IN_FORM_SUBMIT}
        >
          Sign in
        </Button>
      </FormBlock>

      <FormBlock alignH="center">
        <Link
          to={RoutePathsEnum.AUTH_RESET_PASSWORD}
          id={UiIdsEnum.SIGN_IN_FORM_FORGOT_LINK}
        >
          Forgot password?
        </Link>
      </FormBlock>
    </Form>
  );
};
