// ! Delete this comment or delete component if its doesn't use
import { FormikErrors, useFormik } from 'formik';
import { FC } from 'react';

import { ModalFlowEnum } from '../../../../../store/branches/modal/modal.types';
import { exampleModalFlowFormValidation } from '../../../../../validations/forms.validation';
import { FieldLabel } from '../../../../common/FieldLabel';
import { Form } from '../../../../common/form/Form';
import { FormBlock } from '../../../../common/form/FormBlock';
import { ModalActionsTemplate } from '../../../../common/modal/ModalActionsTemplate';
import { Button } from '../../../../common/ui/Button';
import { Input } from '../../../../common/ui/Input';

type Props = {
  onSubmit: (type: ModalFlowEnum, values: IFormValues) => void;
  onClose: () => void;
};

export interface IFormValues {
  lat: string;
  lon: string;
}

export const ModalFlowExampleForm: FC<Props> = (props) => {
  const { onSubmit, onClose } = props;

  const formik = useFormik<IFormValues>({
    validationSchema: exampleModalFlowFormValidation(),
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: {
      lat: '47.8228900',
      lon: '35.1903100',
    },
    validate: () => {
      const errors: FormikErrors<IFormValues> = {};

      return errors;
    },
    onSubmit: (values) => {
      onSubmit(ModalFlowEnum.REVIEW, values);
    },
  });

  const { getFieldProps, handleSubmit, touched, isValid, errors } = formik;

  return (
    <Form onSubmit={handleSubmit} width="full">
      <FormBlock marginBottom="s2">
        <FieldLabel
          blockTitle
          subLabel="Required"
          status={{ error: touched.lat && !!errors.lat, des: errors.lat }}
          label="Latitude coordinates"
        >
          <Input
            {...getFieldProps('lat')}
            placeholder="Enter latitude coordinates here"
            error={touched.lat && !!errors.lat}
            id="modal-flow-form-lat"
          />
        </FieldLabel>

        <FieldLabel
          blockTitle
          subLabel="Required"
          status={{ error: touched.lon && !!errors.lon, des: errors.lon }}
          label="Longitude coordinates"
        >
          <Input
            {...getFieldProps('lon')}
            placeholder="Enter longitude coordinates here"
            error={touched.lon && !!errors.lon}
            id="modal-flow-form-lon"
          />
        </FieldLabel>
      </FormBlock>

      <ModalActionsTemplate noPadding>
        <Button
          variant="outlined"
          height="lg"
          onClick={onClose}
          id="modal-flow-form-cancel-btn"
        >
          Cancel
        </Button>

        <Button
          disabled={!isValid}
          height="lg"
          type="submit"
          id="modal-flow-form-submit-btn"
        >
          Continue
        </Button>
      </ModalActionsTemplate>
    </Form>
  );
};
