
import isEmpty from 'lodash/isEmpty';

export function validateInput(data) {
    let errors = {};
   
    if (isEmpty(data.identifier)) {
        errors.identifier = 'This field is reqired';
    }

    if (isEmpty(data.password)) {
        errors.password = 'This field is reqired';
    }
      
    return {
        errors,
        isValid: isEmpty(errors)
    };
}