// ! Delete this comment or delete component if its doesn't use
import { FormikErrors, useFormik } from 'formik';
import { DateTime } from 'luxon';
import { FC } from 'react';

import {
  ACCEPTED_FILE_FORMATS,
  ACCEPTED_IMAGE_FORMATS,
  ACCEPTED_VIDEO_FORMATS,
} from '../../../../../configs/file-formats.config';
import { exampleFormValidation } from '../../../../../validations/forms.validation';
import { FieldLabel } from '../../../../common/FieldLabel';
import { Form } from '../../../../common/form/Form';
import { FormBlock } from '../../../../common/form/FormBlock';
import { FormText } from '../../../../common/form/FormText';
import { Attach } from '../../../../common/ui/Attach';
import { Button } from '../../../../common/ui/Button';
import { Checkbox } from '../../../../common/ui/Checkbox';
import { DatePeriod } from '../../../../common/ui/DatePeriod';
import { DatePicker } from '../../../../common/ui/DatePicker';
import { InputCode } from '../../../../common/ui/InputCode';
import { InputPhone } from '../../../../common/ui/InputPhone';
import { InputSearch } from '../../../../common/ui/InputSearch';
import { MultiSelect } from '../../../../common/ui/MultiSelect';
import { Rating } from '../../../../common/ui/Rating';
import { Select } from '../../../../common/ui/Select';
import { Switch } from '../../../../common/ui/Switch';
import { Textarea } from '../../../../common/ui/Textarea';
import { Upload } from '../../../../common/ui/Upload';
import { AttachRp } from '../../../../logic/AttachRp';

type Props = {
  submitFetching?: boolean;

  onSubmit(values: IFormValues): void;
};

interface IFormValues {
  lengthTextarea: string;
  simpleTextarea: string;
  simpleSelect: Record<string, any> | null;
  multiSelect: Record<string, any>[] | null;
  inputSearch: string;
  inputPhone: string;
  datePicker: string;
  inputCode: string;
  checkbox: boolean;
  fromDate: string;
  attach: Array<Record<string, any>>;
  switch: boolean;
  upload: string;
  toDate: string;
  rating: number;
}

export const ExampleForm: FC<Props> = (props) => {
  const { submitFetching, onSubmit } = props;

  const formik = useFormik<IFormValues>({
    validationSchema: exampleFormValidation(),
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: {
      lengthTextarea: '',
      simpleTextarea: '',
      simpleSelect: null,
      multiSelect: null,
      inputSearch: '',
      datePicker: '',
      inputPhone: '',
      inputCode: '',
      checkbox: false,
      fromDate: '',
      switch: false,
      upload: '',
      toDate: '',
      attach: [],
      rating: 0,
    },
    validate: () => {
      const errors: FormikErrors<IFormValues> = {};

      return errors;
    },
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  const {
    getFieldProps,
    setFieldValue,
    handleSubmit,
    touched,
    isValid,
    values,
    errors,
  } = formik;

  return (
    <Form onSubmit={handleSubmit}>
      <FormBlock marginBottom="s3">
        <FormText text="Form title example" type="title" />
      </FormBlock>

      <FormBlock marginBottom="s3">
        <FormText text="Form subtitle example" type="subtitle" />
      </FormBlock>

      <FormBlock marginBottom="s3">
        <FormText text="Form simple text example" type="simple" />
      </FormBlock>

      <FormBlock>
        <FieldLabel
          blockTitle
          subLabel="Required"
          status={{
            error: touched.inputSearch && !!errors.inputSearch,
            des: errors.inputSearch,
          }}
          label="Simple search"
        >
          <InputSearch
            {...getFieldProps('inputSearch')}
            onChange={(value) => setFieldValue('inputSearch', value)}
            onClear={() => setFieldValue('inputSearch', '')}
            id="example-form-search-input-field"
          />
        </FieldLabel>

        <FieldLabel
          blockTitle
          subLabel="Required"
          status={{
            error: touched.inputPhone && !!errors.inputPhone,
            des: errors.inputPhone,
          }}
          label="Phone"
        >
          <InputPhone
            {...getFieldProps('inputPhone')}
            id="example-form-input-phone"
          />
        </FieldLabel>

        <FieldLabel
          blockTitle
          subLabel="Required"
          status={{
            error: touched.simpleSelect && !!errors.simpleSelect,
            des: errors.simpleSelect,
          }}
          label="Simple select"
        >
          <Select
            {...getFieldProps('simpleSelect')}
            onChange={(option) => setFieldValue('simpleSelect', option)}
            placeholder="Choose option"
            error={touched.simpleSelect && !!errors.simpleSelect}
            list={[
              { label: 'Test 1', value: 1 },
              { label: 'Test 2', value: 2 },
            ]}
            id="example-form-simple-select-field"
          />
        </FieldLabel>

        <FieldLabel
          blockTitle
          subLabel="Optional"
          status={{
            error: touched.multiSelect && !!errors.multiSelect,
            des: errors.multiSelect,
          }}
          label="Multi select"
        >
          <MultiSelect
            {...getFieldProps('multiSelect')}
            onChange={(option) => setFieldValue('multiSelect', option)}
            placeholder="Choose options"
            error={touched.multiSelect && !!errors.multiSelect}
            list={[
              { label: 'Test 1', value: 1 },
              { label: 'Test 2', value: 2 },
              { label: 'Test 3', value: 3 },
              { label: 'Test 4', value: 4 },
            ]}
            id="example-form-multi-select-field"
          />
        </FieldLabel>

        <FieldLabel
          blockTitle
          subLabel="Required"
          status={{
            error: touched.simpleTextarea && !!errors.simpleTextarea,
            des: errors.simpleTextarea,
          }}
          label="Simple textarea"
        >
          <Textarea
            {...getFieldProps('simpleTextarea')}
            placeholder="Enter your simple text"
            error={touched.simpleTextarea && !!errors.simpleTextarea}
            id="example-form-simple-textarea-field"
          />
        </FieldLabel>

        <FieldLabel
          blockTitle
          subLabel="Required"
          status={{
            error: touched.lengthTextarea && !!errors.lengthTextarea,
            des: errors.lengthTextarea,
          }}
          label="Length textarea"
        >
          <Textarea
            {...getFieldProps('lengthTextarea')}
            placeholder="Enter your length text"
            length={20}
            error={touched.lengthTextarea && !!errors.lengthTextarea}
            id="example-form-simple-length-textarea-field"
          />
        </FieldLabel>

        <FieldLabel
          blockTitle
          subLabel="Required"
          status={{
            error: touched.datePicker && !!errors.datePicker,
            des: errors.datePicker,
          }}
          label="Date picker"
        >
          <DatePicker
            {...getFieldProps('datePicker')}
            getCustomDateFormat={(date) =>
              DateTime.fromJSDate(date).toFormat('dd/MM/yyyy')
            }
            customConfig={{
              dateFormat: 'dd/MM/yyyy',
            }}
            placeholder="Choose date"
            onChange={(value) => {
              setFieldValue('datePicker', value);
            }}
            error={touched.datePicker && !!errors.datePicker}
            id="example-form-simple-date-picker-field"
          />
        </FieldLabel>

        <DatePeriod
          dateFrom={(datePicker) => (
            <FieldLabel
              blockTitle
              subLabel="Required"
              status={{
                error: touched.fromDate && !!errors.fromDate,
                des: errors.fromDate,
              }}
              label="From"
            >
              {datePicker({
                ...getFieldProps('fromDate'),
                placeholder: 'Choose from date',
                onChange: (value: string) => {
                  setFieldValue('fromDate', value);
                },
                error: touched.fromDate && !!errors.fromDate,
                id: 'example-simple-date-picker-from-date',
              })}
            </FieldLabel>
          )}
          dateTo={(datePicker) => (
            <FieldLabel
              blockTitle
              subLabel="Required"
              status={{
                error: touched.toDate && !!errors.toDate,
                des: errors.toDate,
              }}
              label="To"
            >
              {datePicker({
                ...getFieldProps('toDate'),
                placeholder: 'Choose to date',
                onChange: (value: string) => {
                  setFieldValue('toDate', value);
                },
                error: touched.toDate && !!errors.toDate,
                id: 'example-simple-date-picker-to-date',
              })}
            </FieldLabel>
          )}
          id="example-form-date-period"
        />

        <FormBlock marginBottom="s3">
          <InputCode
            {...getFieldProps('inputCode')}
            id="example-form-input-code"
          />
        </FormBlock>

        <FormBlock marginBottom="s3">
          <Switch {...getFieldProps('switch')} id="example-form-switch" />
        </FormBlock>

        <FormBlock marginBottom="s3">
          <Checkbox {...getFieldProps('checkbox')} id="example-form-checkbox" />
        </FormBlock>

        <FormBlock marginBottom="s3">
          <Rating
            onChange={(value: number) => {
              setFieldValue('rating', value);
            }}
            value={values.rating}
            id="example-form-rating"
          />
        </FormBlock>

        <FormBlock marginBottom="s3">
          <AttachRp
            onChange={(value) => {
              setFieldValue('attach', value);
            }}
            maxSize={1024 * 1024 * 50}
            accept={[
              ...ACCEPTED_IMAGE_FORMATS,
              ...ACCEPTED_VIDEO_FORMATS,
              ...ACCEPTED_FILE_FORMATS,
            ]}
            base64
            render={({ files, onOpen, onDelete }) => (
              <Attach
                onDelete={onDelete}
                onOpen={onOpen}
                limit={5}
                files={files}
                id="example-form-attach-id"
              />
            )}
            value={values.attach}
          />
        </FormBlock>

        <FormBlock marginBottom="s3">
          <Upload
            imageOnly
            isCropper
            onChange={(value) => {
              setFieldValue('upload', value);
            }}
            title="Drop an Logo/Image here or select file."
            error={touched.upload && !!errors.upload}
            value={values.upload}
          />
        </FormBlock>
      </FormBlock>

      <FormBlock marginBottom="s3">
        <Button
          disabled={!isValid}
          loading={submitFetching}
          height="lg"
          type="submit"
          id="example-form-form-submit"
        >
          Simple
        </Button>
      </FormBlock>
    </Form>
  );
};
