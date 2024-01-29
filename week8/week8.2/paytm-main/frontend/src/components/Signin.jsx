import { Heading } from './Heading';
import { SubHeading } from './SubHeading';
import { LabelAndInput } from './LabelAndInput';
import { AuthBtn } from './AuthBtn';
import { BottomWarning } from './BottomWarning';
const Signin = () => {
  return (
    <div className='w-[344px] p-6 border rounded bg-white'>
      <Heading label={'Sign In'} />
      <SubHeading label={'Enter your information to create an account'} />
      <div className='py-2'>
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
        <AuthBtn label={'Sign in'} />
      </div>
      <BottomWarning
        label={"Don't have an account?"}
        buttonText={'Sign up'}
        to={'/signup'}
      />
    </div>
  );
};

export default Signin;
