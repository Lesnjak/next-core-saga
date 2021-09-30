// ! Delete this comment or delete component if its doesn't use
import { FormikErrors, useFormik } from 'formik';
import { FC } from 'react';

import { RoutePathsEnum } from '../../../../configs/routes.config';
import { UiIdsEnum } from '../../../../configs/ui-ids.config';
import { IResetPasswordFormValues } from '../../../../typings/forms-values.interfaces';
import { resetPasswordFormValidation } from '../../../../validations/forms.validation';
import { FieldLabel } from '../../../common/FieldLabel';
import { Form } from '../../../common/form/Form';
import { FormBlock } from '../../../common/form/FormBlock';
import { FormText } from '../../../common/form/FormText';
import { Button } from '../../../common/ui/Button';
import { Input } from '../../../common/ui/Input';
import { Link } from '../../../common/ui/Link';

type Props = {
  submitFetching: boolean;
  error?: string;

  onSubmit: (values: IResetPasswordFormValues) => void;
};

export const ResetPasswordForm: FC<Props> = (props) => {
  const { submitFetching, onSubmit, error } = props;

  const formik = useFormik<IResetPasswordFormValues>({
    validationSchema: resetPasswordFormValidation(),
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: {
      email: 'test@s-pro.io',
    },
    validate: () => {
      const errors: FormikErrors<IResetPasswordFormValues> = {};

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
        <FormText text="Reset password" type="title" />
      </FormBlock>

      <FormBlock marginBottom="s6">
        <FormText
          text="Enter the email address associated with your account, and we’ll email you a link to reset your password."
          type="subtitle"
        />
      </FormBlock>

      <FormBlock marginBottom="s2">
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
            id={UiIdsEnum.RESET_PASSWORD_FORM_EMAIL}
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
          id={UiIdsEnum.RESET_PASSWORD_FORM_SUBMIT}
        >
          Send reset link
        </Button>
      </FormBlock>

      <FormBlock alignH="center">
        <Link
          id={UiIdsEnum.RESET_PASSWORD_FORM_BACK_LINK}
          to={RoutePathsEnum.AUTH_SIGN_IN}
        >
          Back to sign in
        </Link>
      </FormBlock>
    </Form>
  );
};
