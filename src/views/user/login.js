import React, { Component } from "react";
import { Row, Card, Label, Button, Input, Col } from "reactstrap";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    onUserLogin = () => {
        const { email, password } = this.state;
        if (!this.props.loading) {
            if (email !== "" && password !== "") {
                this.props.loginUser(this.state, this.props.history);
            }
        }
    }

    validateEmail = (value) => {
        let error;
        if (!value) {
            error = "Please enter your email address";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = "Invalid email address";
        }
        return error;
    }

    validatePassword = (value) => {
        let error;
        if (!value) {
            error = "Please enter your password";
        } else if (value.length < 4) {
            error = "Value must be longer than 3 characters";
        }
        return error;
    }

    render() {
        const { password, email } = this.state;

        return (
            <Row className="h-100">
                <Col xxs="12" md="10" className="mx-auto my-auto">
                    <Card className="auth-card">
                        <div>
                            <Label>Email:</Label>
                            <Input
                                type="text"
                                value={email}
                                name="email"
                                onChange={e => this.setState({
                                    email: e.target.value
                                })}
                            />
                        </div>
                        <div>
                            <Label>Email:</Label>
                            <Input
                                type="password"
                                value={password}
                                name="password"
                                onChange={e => this.setState({
                                    password: e.target.value
                                })}
                            />
                        </div>
                        <div className="text-right">
                            <Button
                                size="md"
                                onClick={this.onUserLogin}
                            >Login</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        );
    }
}
const mapStateToProps = ({ authUser }) => {
    const { user, loading, error } = authUser;
    return { user, loading, error };
};

export default connect(
    mapStateToProps,
    {
        loginUser
    }
)(Login);