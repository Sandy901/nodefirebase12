import React from 'react'

const TextField = () => {
  return (
    <Field
    name={name}
    render={({ field }) => {
      return (
        <Fragment>
          <FormGroup controlId={name}>
            <div className="d-flex align-items-baseline">
              <div className="margin-end-2">
                <FormLabel>{label}</FormLabel>
              </div>
              <div className="error">
                <ErrorMessage name={name} />
              </div>
            </div>
            <FormControl type={type} {...rest} {...field} />
          </FormGroup>
        </Fragment>
      );
    }}
  />
  )
}

export default TextField