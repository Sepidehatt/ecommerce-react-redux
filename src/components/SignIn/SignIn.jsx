import React, { Component } from 'react';
import './styles.scss';
import Buttons from '../Forms/Button/Button';
import { firebaseConfig } from '../../firebase/config';
import { signInWithGoogle } from '../../firebase/utils';

export class SignIn extends Component {
    render() {
        return (
            <div className="signin">
                <div className="wrap">
                    <h2>Login</h2>
                    <div className="form-wrap">
                        <form>
                            <div className="social-signin">
                                <div className="row">
                                    <Buttons onClick={signInWithGoogle}>
                                        Sign in via Google
                                    </Buttons>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
