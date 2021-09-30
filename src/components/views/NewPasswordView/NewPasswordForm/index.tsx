// ! Delete this comment or delete component if its doesn't use
import { FormikErrors, useFormik } from 'formik';
import { FC } from 'react';

import { ICONS } from '../../../../configs/icons.config';
import { RoutePathsEnum } from '../../../../configs/routes.config';
import { UiIdsEnum } from '../../../../configs/ui-ids.config';
import { INewPasswordFormValues } from '../../../../typings/forms-values.interfaces';
import { newPasswordFormValidation } from '../../../../validations/forms.validation';
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

  onSubmit: (values: INewPasswordFormValues) => void;
};

export const NewPasswordForm: FC<Props> = (props) => {
  const { submitFetching, onSubmit, error } = props;

  const formik = useFormik<INewPasswordFormValues>({
    validationSchema: newPasswordFormValidation(),
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: {
      confirmPassword: 'Qwerty123!',
      newPassword: 'Qwerty123!',
    },
    validate: () => {
      const errors: FormikErrors<INewPasswordFormValues> = {};

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
        <FormText text="New password" type="title" />
      </FormBlock>

      <FormBlock marginBottom="s2">
        <FieldLabel
          blockTitle
          subLabel="Required"
          status={{
            error: touched.newPassword && !!errors.newPassword,
            des: errors.newPassword,
          }}
          label="New password"
        >
          <BoolRp
            render={({ boolValue, toggleBool }) => (
              <Input
                {...getFieldProps('newPassword')}
                placeholder="Enter new password here"
                rightBlock={
                  <SvgIcon
                    onClick={toggleBool}
                    pointer
                    size="lg"
                    src={boolValue ? ICONS.eyeCrossedIcon : ICONS.eyeIcon}
                    id={UiIdsEnum.NEW_PASSWORD_FORM_NEW_PASSWORD_ICON}
                  />
                }
                error={touched.newPassword && !!errors.newPassword}
                type={boolValue ? 'text' : 'password'}
                id={UiIdsEnum.NEW_PASSWORD_FORM_NEW_PASSWORD}
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
                    id={UiIdsEnum.NEW_PASSWORD_FORM_CONFIRM_PASSWORD_ICON}
                  />
                }
                error={touched.confirmPassword && !!errors.confirmPassword}
                type={boolValue ? 'text' : 'password'}
                id={UiIdsEnum.NEW_PASSWORD_FORM_CONFIRM_PASSWORD}
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
          id={UiIdsEnum.NEW_PASSWORD_FORM_SUBMIT}
        >
          Set new password
        </Button>
      </FormBlock>

      <FormBlock alignH="center">
        <Link
          id={UiIdsEnum.NEW_PASSWORD_FORM_BACK_LINK}
          to={RoutePathsEnum.AUTH_SIGN_IN}
        >
          Back to sign in
        </Link>
      </FormBlock>
    </Form>
  );
};
