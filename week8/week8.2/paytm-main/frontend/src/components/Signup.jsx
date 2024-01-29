import { Heading } from './Heading';
import { SubHeading } from './SubHeading';
import { LabelAndInput } from './LabelAndInput';
import { AuthBtn } from './AuthBtn';
import { BottomWarning } from './BottomWarning';
const Signup = () => {
  return (
    <div className='w-[344px] p-6 border rounded bg-white'>
      <Heading label={'Sign Up'} />
      <SubHeading label={'Enter your information to create an account'} />
      <div className='py-2'>
        <LabelAndInput
          label={'First Name'}
          type={'text'}
          placeholder={'Shubham'}
        />
        <LabelAndInput
          label={'Last Name'}
          type={'text'}
          placeholder={'Patil'}
        />
        <LabelAndInput
          label={'Email'}
          type={'text'}
          placeholder={'shubhp1@gmail.com'}
        />
        <LabelAndInput
          label={'Password'}
          type={'password'}
          placeholder={'12345678'}
        />
        <AuthBtn label={'Sign up'} />
      </div>
      <BottomWarning
        label={'Already have an account?'}
        buttonText={'Sign in'}
        to={'/signin'}
      />
    </div>
  );
};

export default Signup;
